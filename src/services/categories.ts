import { type } from "arktype";
import { defaultCategories } from "./default_categories";

const categoryItemSchema = type({
  id: "string",
  text: "string",
  "checked?": "boolean",
});

const categorySchema = type({
  id: "string",
  title: "string",
  items: categoryItemSchema.array(),
});

const categoriesSchema = categorySchema.array();

export type Category = typeof categorySchema.infer;
export type CategoryItem = typeof categoryItemSchema.infer;

export class CategoriesService {
  private storageKey = "pakui-categories";
  categories: Category[] = [];

  constructor() {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      this.categories = this.load();
    } else {
      this.categories = defaultCategories;
    }
  }

  load(): Category[] {
    const storedCategories = localStorage.getItem(this.storageKey);
    if (storedCategories) {
      try {
        const parsedData = JSON.parse(storedCategories);
        const output = categoriesSchema(parsedData);

        if (output instanceof type.errors) {
          console.error("LocalStorage data validation failed:", output.summary);
          throw new Error("Invalid data structure in localStorage.");
        }

        return output;
      } catch (error) {
        console.error(
          "Failed to load or validate categories from localStorage:",
          error,
        );
        // Fallback to default if parsing or validation fails
        localStorage.removeItem(this.storageKey); // Clear corrupted/invalid data
      }
    }
    return defaultCategories;
  }

  add(categoryId: string, text: string) {
    const category = this.categories.find((cat) => cat.id === categoryId);
    if (category && text.trim()) {
      const newItem: CategoryItem = {
        id: `${categoryId}-item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        text: text.trim(),
        checked: false,
      };
      category.items.push(newItem);
      this.save();
    } else {
      console.warn(
        `Category with id "${categoryId}" not found or text is empty.`,
      );
    }
  }

  updateItemChecked(itemId: string, checked: boolean) {
    for (const category of this.categories) {
      const item = category.items.find((itm) => itm.id === itemId);
      if (item) {
        item.checked = checked;
        this.save();
        return; // Item found and updated, exit
      }
    }
    console.warn(`Item with id "${itemId}" not found.`);
  }

  remove(itemId: string) {
    let itemRemoved = false;
    this.categories = this.categories.map((category) => {
      const initialLength = category.items.length;
      category.items = category.items.filter((item) => item.id !== itemId);
      if (category.items.length < initialLength) {
        itemRemoved = true; // Mark that an item was removed
      }
      return category;
    });

    if (itemRemoved) {
      this.save(); // Save changes if an item was actually removed
    } else {
      console.warn(`Item with id "${itemId}" not found for removal.`);
    }
  }

  save() {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.categories));
      } catch (error) {
        console.error("Failed to save categories to localStorage", error);
      }
    }
  }

  reset() {
    this.categories = defaultCategories;
    this.save();
  }
}
