<template>
    <v-container fluid class="mt-10 px-0">
        <v-card class="ma-4 bg-transparent elevation-0 text-center" height="300" style="overflow: visible" v-if="files.length">
            <img height="300" :src="generateURL(files[0])" style="border-radius: 20px" alt="image"/>
            <v-btn
                    color="error"
                    dark
                    icon
                    style="position: absolute; right: -10px; top: -10px"
                    size="x-small"
                    @click="remove(files.indexOf(0))"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card>
        <div
                v-if="!files.length"
                style="height: 270px; border: 3px dashed;border-radius: 20px;text-transform: capitalize"
                :style="{'border-color' : useTheme().current.value.colors.primary}"
                class="mt-4"
                :class="{'pt-4 pt-6' : !files.length}"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="drop"
        >
            <input
                    type="file"
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
            </div></div>
    </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

let isDragging = ref(false)
let files = ref([])
let props = defineProps(['fileType'])
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