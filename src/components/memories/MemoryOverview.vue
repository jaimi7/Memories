<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>
  
<script setup>
import { IonImg } from "@ionic/vue";

defineProps({
  title: {
    required: true,
  },
  image: {
    required: false,
  },
  description: {
    required: false,
  },
});
</script>