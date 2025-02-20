<script setup lang="ts">
import TabItem from "./TabItem.vue";
</script>

<template>
  <div class="flex justify-between items-center z-50 relative p-4">
    <img src="/white_logo.svg" alt="Logo" class="h-20" />
    <div class="flex justify-end space-x-4">
      <TabItem id="about">About</TabItem>
      <TabItem id="faq">FAQ</TabItem>
      <TabItem id="team">Team</TabItem>
    </div>
  </div>
</template>
