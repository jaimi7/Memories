<template>
  <ion-list>
    <memory-list-item v-for="memory in memories" :key="memory.id" :memory="memory"></memory-list-item>
  </ion-list>
</template>
  
<script setup>
import { IonList } from "@ionic/vue";
import MemoryListItem from "./MemoryListItem.vue";

defineProps({
  memories:{
    required:true
  }
})
</script>