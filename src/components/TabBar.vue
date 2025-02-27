<script setup lang="ts">
import TabItem from "./TabItem.vue";
</script>

<template>
  <div class="flex justify-between px-1 border-b border-gray-200 tab-bar">
      <a href="/">
        <img src="/white_logo.svg" alt="Logo" class="h-13"></img>
      </a>
    <div class="flex justify-end space-x-2">
      <TabItem id="about">About</TabItem>
      <TabItem id="register">Register</TabItem>
      <TabItem id="faq">FAQ</TabItem>
      <TabItem id="team">Team</TabItem>
    </div>
  </div>
</template>
