<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>{{ memory.title }}</ion-label>
  </ion-item>
</template>
  
<script setup>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

defineProps({
  memory: {
    required: true,
  },
});
</script>