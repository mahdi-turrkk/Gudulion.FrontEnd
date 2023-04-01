<template>
  <v-container fluid>
    <div
        style="height: 270px; border: 3px dashed;border-radius: 20px;text-transform: capitalize"
        :style="{'border-color' : useTheme().current.value.colors.primary}"
        class="pa-4 pt-6 mt-3"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
    >
      <input
          type="file"
          multiple
          name="file"
          id="fileInput"
          class="hidden-input"
          @change="onChange"
          ref="file"
          :accept="fileType"
      />
      <div v-if="isDragging" class="greyText--text">
        کلید ماوس را برای رها کردن عکس ها رها کنید
      </div>
      <div v-else class="text-center">
        <v-icon
            v-if="!files.length"
            color="primary"
            size="80"
            class="mb-3 mt-6"
            @click="clickInput"
            icon="mdi-cloud-upload-outline"
        >
        </v-icon
        >
        <div class="text-primary text-subtitle-1 text-md-h6" @click="clickInput" style="cursor: pointer">
          عکس مورد نظر را در کادر بیاندازید یا روی
          <div class="d-inline-block text-blue text-decoration-underline">
          اینجا
          </div>
          کلیک کنید
        </div>
        <div @click="clickInput" style="cursor: pointer" class="mt-3" v-if="files.length > 0">
          <v-icon color="primary">mdi-plus-thick</v-icon>
        </div>
      </div>
      <v-slide-group v-if="files.length" class="pa-4" show-arrows dir="ltr">
        <v-slide-group-item v-for="file in files" :key="file.name">
          <v-card class="ma-4" height="100" style="overflow: visible;aspect-ratio: 16/9">
            <v-img height="100" aspect-ratio="9/16" :src="generateURL(file)"></v-img>
            <v-btn
                color="error"
                dark
                icon
                style="position: absolute; right: -10px; top: -10px"
                size="x-small"
                @click="remove(files.indexOf(file))"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn
            >
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

let isDragging = ref(false)
let files = ref([])
let props = defineProps(['numberOfFiles', 'fileType', 'n', 'i'])
let file = ref(null)
const emit = defineEmits(["filesChanged"])
function onChange() {
  files.value.push(...file.value.files);
  emit("filesChanged", files.value, props.n, props.i);
}

function dragover(e) {
  e.preventDefault();
  isDragging.value = true;
}

function dragleave() {
  isDragging.value = false;
}

function drop(e) {
  e.preventDefault();
  file.value.files = e.dataTransfer.files;
  onChange();
  isDragging.value = false;
}

function remove(i) {
  files.value.splice(i, 1);
  emit("filesChanged", files.value);
}

function generateURL(file) {
  let fileSrc = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(fileSrc);
  }, 1000);
  return fileSrc;
}

function clickInput() {
  file.value.click();
}

</script>

<style>
.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}
</style>