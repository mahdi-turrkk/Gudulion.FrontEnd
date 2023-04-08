<template>
  <v-container fluid class="pa-0 ma-0">
      <v-list-item>
          <v-avatar class="d-inline-block" size="large">
              <v-img
                      :src="data.image"
                      style="object-fit: cover !important"
                      alt="avatar"
              />
          </v-avatar>
          <div class="d-inline-block text-subtitle-1 text-md-h6 mr-4 text-info">{{ data.name }}</div>
      </v-list-item>
      <div class="text-subtitle-1 text-md-h6 text-info px-9 mt-4">{{ data.message }}</div>
  </v-container>
</template>

<script setup>

const props = defineProps(['data'])

</script>

<style>
.v-field--variant-solo {
    box-shadow: none;
}
</style>