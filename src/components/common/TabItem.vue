<template>
  <button
    type="button"
    @click="handleClick"
    class="px-4 py-2 text-lg bg-transparent hover:underline focus:outline-none"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useSmoothScroll } from "@/composables/useSmoothScroll";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const { scrollToId } = useSmoothScroll();

const handleClick = () => {
  scrollToId(props.id);
};
</script>
