<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>
  
<script setup>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
import BaseLayout from "../components/BaseLayout.vue";
import { useMemoriesStore } from "../stores/memories-store";
import { useRoute } from "vue-router";
import { computed } from "vue";

const memoriesStore = useMemoriesStore();
const router = useRoute();

const memoryId = router?.params?.id;
const loadedMemory = computed(() => memoriesStore.memory(memoryId));
</script>