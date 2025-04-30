<script lang="ts">
import { onMount } from "svelte";
import {
  CategoriesService,
  type Category as CategoryType,
} from "../services/categories";
import Category from "./Category.svelte";
import CategoryItem from "./CategoryItem.svelte";

let categories: CategoryType[] = $state([]);
let categoriesService: CategoriesService;

onMount(() => {
  categoriesService = new CategoriesService();
  categories = categoriesService.categories;
});

function handleAddItem(categoryId: string) {
  return (event: Event) => {
    const input = event.target as HTMLInputElement;
    categoriesService.add(categoryId, input.value);
    categories = [...categoriesService.categories]; // Force reactivity by creating a new array reference
    input.value = ""; // Clear input
  };
}

function handleCheckboxChange(itemId: string) {
  return (event: Event) => {
    const checkbox = event.target as HTMLInputElement;
    categoriesService.updateItemChecked(itemId, checkbox.checked);
    // Force reactivity if needed, though direct mutation + save should work with $state
    categories = [...categoriesService.categories];
  };
}

function handleRemoveItem(itemId: string) {
  return () => {
    categoriesService.remove(itemId);
    // Force reactivity
    categories = [...categoriesService.categories];
  };
}
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each categories as category (category.id)}
    <Category title={category.title} onAddItem={handleAddItem(category.id)}>
      {#each category.items as item (item.id)}
        <CategoryItem
          id={item.id}
          text={item.text}
          checked={item?.checked ?? false}
          onCheckboxChange={handleCheckboxChange(item.id)}
          onRemoveItem={handleRemoveItem(item.id)}
        />
      {/each}
    </Category>
  {/each}
</div>

<!-- Example Reset Button (place appropriately in your layout) -->
<!--
<div class="mt-8 text-center">
  <button
    onclick={() => categoriesService?.reset()}
    class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
  >
    Reset All Lists
  </button>
</div>
-->
