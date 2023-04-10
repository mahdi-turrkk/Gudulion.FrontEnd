<template>
    <v-container fluid class="mt-16 px-lg-10">
        <v-row class="px-2">
            <v-col cols="12" class="px-0">
                <div class="d-flex flex-row justify-space-between">
                    <div class="d-inline-block" style="width: 250px">
                        <v-text-field
                                label="فیلتر بر اساس عنوان"
                                variant="underlined"
                                color="primary"
                                append-icon="mdi-filter"
                                @click:append="filter"
                                :style="{'color' : useTheme().current.value.colors.primary}"
                        ></v-text-field>
                    </div>
                    <div class="d-inline-block">
                        <v-btn append-icon="mdi-plus thick" color="primary" class="text-background"
                               style="border-radius: 15px"
                               v-if="useDisplay().mdAndUp.value">
                            ثبت درخواست جدید
                        </v-btn>
                        <v-btn icon="mdi-plus thick" color="primary" class="text-background mt-3" size="x-small"
                               v-if="useDisplay().smAndDown.value"></v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-card color="primary" elevation="5" class="py-1 px-2" style="border-radius: 20px">
            <div class="py-2 px-4 d-none d-lg-block">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 12%">کد درخواست</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 20%">عنوان
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 21%">تاریخ
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 21%">هدف
                    درخواست
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 16%">آخرین
                    وضعیت
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 10%">عمل ها
                </div>
            </div>
            <div class="py-2 px-4 d-none d-sm-block d-lg-none">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 35%">عنوان</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 40%">آخرین
                    وضعیت
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 25%">عمل ها
                </div>
            </div>
            <div class="py-2 px-4 d-block d-sm-none">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 45%">عنوان</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 50%">آخرین
                    وضعیت
                </div>
            </div>
        </v-card>
        <v-row class="my-4 px-3" v-for="darxast in darxasts">
            <request-list-item :data="darxast"/>
        </v-row>
        <v-row style="direction: ltr" class="mt-8 mb-1 px-2">
            <v-pagination
                    v-model="page"
                    :length="pages"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    variant="elevated"
                    color="background"
                    density="comfortable"
                    active-color="primary"
                    total-visible="5"
            ></v-pagination>
        </v-row>
    </v-container>
</template>

<script setup>
import {useDisplay, useTheme} from "vuetify";

let darxasts = ref([
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'rejected'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'accepted'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'rejected'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'accepted'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'rejected'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'accepted'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'rejected'
    },
])

let page = ref(1)
let pages = ref(100)

function filter() {
//     filter function goes here
}

</script>

