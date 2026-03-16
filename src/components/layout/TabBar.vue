<script setup lang="ts">
import TabItem from "../common/TabItem.vue";
import { NAV_LINKS } from "@/constants/navLinks";
</script>

<template>
  <div class="flex justify-between px-1 border-b border-gray-200 tab-bar">
    <a href="/">
      <img src="/white_logo.svg" alt="Logo" class="h-13" />
    </a>
    <div class="flex justify-end space-x-2">
      <TabItem v-for="link in NAV_LINKS" :key="link.id" :id="link.id">
        {{ link.label }}
      </TabItem>
    </div>
  </div>
</template>
