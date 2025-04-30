<script lang="ts">
type Props = {
  id: string;
  text: string;
  checked: boolean;
  onCheckboxChange: (event: Event) => void;
  onRemoveItem: (event: Event) => void;
};
const {
  id,
  text,
  checked = false,
  onCheckboxChange,
  onRemoveItem,
}: Props = $props();
</script>

<li class="flex items-center gap-2">
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onchange={onCheckboxChange}
    class="h-4 w-4 shrink-0 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
  />
  <label
    for={id}
    class={['flex-grow cursor-pointer', checked && 'text-gray-500 line-through']}
  >
    {text}
  </label>
  <button
    onclick={onRemoveItem}
    class="ml-2 shrink-0 rounded px-1.5 py-0.5 text-xs text-red-500 opacity-50 hover:bg-red-100 hover:opacity-100"
    aria-label={`Remove ${text}`}
  >
    &times;
  </button>
</li>
