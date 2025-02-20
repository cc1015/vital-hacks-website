<template>
  <button @click="scrollToSection" class="px-4 py-2 text-lg bg-transparent hover:underline focus:outline-none">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ id: string }>();

const scrollToSection = () => {
  const element = document.getElementById(props.id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.warn(`Element with id "${props.id}" not found.`);
  }
};
</script>
