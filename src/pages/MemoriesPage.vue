<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>
  
<script setup>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import BaseLayout from '../components/BaseLayout.vue'
import MemoriesList from "../components/memories/MemoriesList.vue";
import { useMemoriesStore } from "../stores/memories-store";
import { computed } from "vue";

const memoriesStore = useMemoriesStore()

const memories = computed(()=>memoriesStore.memories)
</script>