<script lang="ts">
import type { Snippet } from "svelte";

type Props = {
  title: string;
  onAddItem: (event: Event) => void;
  children: Snippet;
};

const { title, onAddItem, children }: Props = $props();

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === "Enter") {
    onAddItem(event);
  }
}
</script>

<section class="flex break-inside-avoid flex-col gap-3 py-6 text-sm">
  <h2 class="border-b border-gray-300 pb-1 font-semibold uppercase">
    {title}:
  </h2>

  <ul class="space-y-2">
    {@render children?.()}

    <li class="mt-2">
      <input
        type="text"
        onkeypress={handleKeyPress}
        class="w-full border-b border-gray-300 py-1 text-sm outline-none focus:border-indigo-500"
        placeholder="Додати пункт..."
        aria-label={`Add item to ${title}`}
      />
      <!-- Optional: Add button -->
      <!--
      <button
        onclick={(e) => onAddItem(categoryId, { target: e.target.previousElementSibling } as unknown as Event)}
        class="ml-2 rounded bg-indigo-500 px-2 py-1 text-xs text-white hover:bg-indigo-600"
      >
        Add
      </button>
      -->
    </li>
  </ul>
</section>
