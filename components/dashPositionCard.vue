<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card color="background" elevation="5" class="text-center pb-10" style="border-radius: 20px">
      <v-row class="justify-center">
        <img :src="imageSrc" height="200" :alt="title" class="my-8" style="border-radius: 20px"/>
      </v-row>
      <v-card-title class="text-primary text-h5 text-md-h4">{{ title }}</v-card-title>
      <v-card-title class="text-info text-h6 text-md-h5">{{ heading }}</v-card-title>
    </v-card>
  </v-container>
</template>

<script setup>

let props = defineProps(['imageSrc' , 'title' , 'heading'])

</script>