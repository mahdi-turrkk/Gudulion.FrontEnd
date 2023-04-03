<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card color="background" elevation="5" class="py-5 px-8" style="border-radius: 20px">
      <v-card-title class="text-primary text-h6 text-md-h5 mb-3">{{ title }}</v-card-title>
      <v-divider color="secondary" class="border-opacity-100" thickness="2"/>
      <v-card-text class="px-4">
        <div v-for="item in items">
          <div class="d-inline-block text-subtitle-1 text-md-h6 mt-4" style="width: 50%">{{item.title}}</div>
          <div class="d-inline-block text-end text-subtitle-1 text-md-h6 mb-4" style="width: 50%">{{item.date}}</div>
          <v-divider color="secondary" class="border-opacity-100" thickness="1"/>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>

let props = defineProps(['title' , 'items'])

</script>