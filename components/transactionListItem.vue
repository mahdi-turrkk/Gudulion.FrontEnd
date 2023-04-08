<template>
    <v-container fluid class="pa-0 ma-0">
        <v-card color="background" elevation="5" class="py-1 px-2" style="border-radius: 20px"
                @mouseenter="isDeleteVisible = true" @mouseleave="isDeleteVisible = false">
            <div class="py-2 px-4" v-if="useDisplay().lgAndUp.value">
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 10%"
                     v-if="!isDeleteVisible">
                    {{ index }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 10%"
                     v-if="isDeleteVisible">
                    <v-btn variant="outlined" icon="mdi-delete" color="error" size="small"></v-btn>
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 25%">
                    {{ data.title }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 23%">
                    {{ data.date }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 22%">
                    {{ data.payer }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 20%">
                    {{ data.amount }} تومان
                </div>
            </div>
            <v-expansion-panels variant="accordion" v-if="useDisplay().mdAndDown.value">
                <v-expansion-panel class="bg-transparent" v-if="useDisplay().md.value || useDisplay().sm.value">
                    <v-expansion-panel-title class="py-2 px-4">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info"
                                         style="width: 20%">
                                        {{ index }}
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info"
                                         style="width: 40%">
                                        {{ data.title }}
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                         style="width: 40%">
                                        {{ data.amount }}
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row no-gutters>
                            <v-divider color="secondary" class="border-opacity-100"/>
                            <v-col cols="12" sm="6" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">تاریخ:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.date }}
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">پرداخت کننده:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.payer }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-4" style="direction: ltr">
                                <v-btn color="error" class="text-background" prepend-icon="mdi-delete"
                                       style="border-radius: 15px">حذف
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="bg-transparent" v-if="useDisplay().xs.value">
                    <v-expansion-panel-title class="py-2 px-4">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info"
                                         style="width: 30%">
                                        {{ index }}
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                         style="width: 70%">
                                        {{ data.amount }} تومان
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row no-gutters>
                            <v-divider color="secondary" class="border-opacity-100"/>
                            <v-row no-gutters>
                                <v-col cols="12" sm="6" class="mt-4">
                                    <div class="text-primary d-inline-block text-md-h6">عنوان:</div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                        &nbsp{{ data.title }}
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6" class="mt-4">
                                    <div class="text-primary d-inline-block text-md-h6">تاریخ:</div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                        &nbsp{{ data.date }}
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6" class="mt-4">
                                    <div class="text-primary d-inline-block text-md-h6">پرداخت کننده:</div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                        &nbsp{{ data.payer }}
                                    </div>
                                </v-col>
                                <v-col cols="12" class="mt-4 d-block d-sm-none" style="direction: ltr">
                                    <v-btn color="error" class="text-background" prepend-icon="mdi-delete"
                                           style="border-radius: 15px">حذف
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </v-container>
</template>

<script setup>


import {useDisplay} from "vuetify";

const props = defineProps(['data', 'index'])
let isDeleteVisible = ref(false)

</script>

<style>

.v-expansion-panel__shadow {
    display: none;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay, .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true] > .v-expansion-panel-title__overlay {
    opacity: 0;
}

</style>