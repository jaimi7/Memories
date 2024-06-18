<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>
  
<script setup>
import CreateMemoryForm from "../components/memories/CreateMemoryForm.vue";
import BaseLayout from '../components/BaseLayout.vue'
import { useMemoriesStore } from "../stores/memories-store";
import { useRouter } from "vue-router";

const memoriesStore = useMemoriesStore()
const router = useRouter()

const saveMemory = (memoryData) => {
  memoriesStore.addMemory(memoryData)
  router.replace("/memories")
}
</script>