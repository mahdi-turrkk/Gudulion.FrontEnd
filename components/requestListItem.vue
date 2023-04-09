<template>
    <v-container fluid class="pa-0 ma-0">
        <v-card color="background" elevation="5" class="py-1 px-2" style="border-radius: 20px">
            <div class="py-2 px-4" v-if="useDisplay().lgAndUp.value">
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info" style="width: 12%">
                    {{ data.trackingCode }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 20%">
                    {{ data.title }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 21%">
                    {{ data.date }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 21%">
                    {{ data.personName }}
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 16%">
                    <div class="d-inline-block text-error" v-if="data.status == 'rejected'">رد شده
                    </div>
                    <div class="d-inline-block text-warning" v-if="data.status == 'pending'">در انتظار
                        تایید
                    </div>
                    <div class="d-inline-block text-success" v-if="data.status == 'accepted'">تایید شده</div>
                </div>
                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center" style="width: 10%">
                    <v-btn v-bind="props" color="success" variant="text" icon="mdi-information-variant"
                           size="30"></v-btn>
                </div>
            </div>
            <v-expansion-panels variant="accordion" v-if="useDisplay().mdAndDown.value">
                <v-expansion-panel class="bg-transparent" v-if="useDisplay().md.value || useDisplay().sm.value">
                    <v-expansion-panel-title class="py-2 px-4">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info" style="width: 35%">
                                        {{ data.title }}
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                         style="width: 40%">
                                        <div class="d-inline-block text-error" v-if="data.status == 'rejected'">رد شده
                                        </div>
                                        <div class="d-inline-block text-warning" v-if="data.status == 'pending'">در انتظار
                                            تایید
                                        </div>
                                        <div class="d-inline-block text-success" v-if="data.status == 'accepted'">تایید شده</div>
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                         style="width: 25%">
                                        <v-btn color="success" variant="text" icon="mdi-information-variant"
                                               size="30"></v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row no-gutters>
                            <v-divider color="secondary" class="border-opacity-100"/>
                            <v-col cols="12" sm="6" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">کد پیگیری:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info">
                                    &nbsp{{ data.trackingCode }}
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">تاریخ:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.date }}
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">نام هدف:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.personName }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="bg-transparent" v-if="useDisplay().xs.value">
                    <v-expansion-panel-title class="py-2 px-4">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info" style="width: 45%">
                                        {{ data.title }}
                                    </div>
                                    <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                         style="width: 55%">
                                        <div class="d-inline-block text-error" v-if="data.status == 'rejected'">رد شده
                                        </div>
                                        <div class="d-inline-block text-warning" v-if="data.status == 'pending'">در انتظار
                                            تایید
                                        </div>
                                        <div class="d-inline-block text-success" v-if="data.status == 'accepted'">تایید شده</div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row no-gutters>
                            <v-divider color="secondary" class="border-opacity-100"/>
                            <v-col cols="12" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">کد پیگیری:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info">
                                    &nbsp{{ data.trackingCode }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">تاریخ:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.date }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-4">
                                <div class="text-primary d-inline-block text-md-h6">نام هدف:</div>
                                <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center">
                                    &nbsp{{ data.personName }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-4 d-block d-sm-none" style="direction: ltr">
                                <v-btn color="success" class="text-background mx-1">اطلاعات</v-btn>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </v-container>
</template>

<script setup>


import {useDisplay} from "vuetify";

const props = defineProps(['data'])

</script>

<style>

.v-expansion-panel__shadow {
    display: none;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay, .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true] > .v-expansion-panel-title__overlay {
    opacity: 0;
}

</style>