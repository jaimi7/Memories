<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <!-- <ion-item>
        <ion-thumbnail v-if="takenImageUrl" slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>Take Photo
        </ion-button>
      </ion-item>-->
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" v-model="takenImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>
  
<script setup>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  // IonThumbnail,
  // IonIcon,
} from "@ionic/vue";
import { ref } from "vue";
// import { camera } from "ionicons/icons";
// import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const enteredTitle = ref();
const enteredDescription = ref();
const takenImageUrl = ref();

const emit = defineEmits(["save-memory"]);

// const takePhoto = async () => {
//   const photo = await Camera.getPhoto({
//     resultType: CameraResultType.Uri,
//     source: CameraSource.Camera,
//     quality: 60,
//   });

//   takenImageUrl.value = photo.webPath;
// };

const submitForm = () => {
  const memoryData = {
    title: enteredTitle.value,
    imageUrl: takenImageUrl.value,
    description: enteredDescription.value,
  };
  emit("save-memory", memoryData);
};
</script>