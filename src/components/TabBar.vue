<script setup lang="ts">
import TabItem from "./TabItem.vue";
</script>

<template>
  <div class="flex justify-between">
    <img
      alt="Vital Hacks Logo"
      class="place-content-center"
      src="/public/navy_logo_fill.png"
      height="100"
      width="100"
    />
    <div class="flex justify-end space-x-4">
      <TabItem>About</TabItem>
      <TabItem>Register</TabItem>
      <TabItem>FAQ</TabItem>
      <TabItem>Team</TabItem>
    </div>
  </div>
</template>
