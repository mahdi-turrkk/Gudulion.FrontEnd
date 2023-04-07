<template>
    <v-container fluid class="pa-0 ma-0 mt-2">
        <v-row class="text-primary text-h5 text-md-h4 justify-center">{{ data.title }}</v-row>
        <v-row class="mt-md-5">
            <v-col cols="12" md="8" lg="6" class="text-center">
                <img :src="data.image" style="border-radius: 20px;height: 400px;max-width: 100%;object-fit: contain"
                     :alt="data.title"/>
            </v-col>
            <v-col cols="12" md="4" lg="6">
                <v-radio-group v-model="data.paymentType" class="mt-md-4" readonly>
                    <v-radio value="shirni" color="primary" class="text-h6">
                        <template v-slot:label>
                            <div class="text-subtitle-1 text-md-h6 text-info">{{ data.name }}</div>
                        </template>
                    </v-radio>
                    <v-radio value="cash" color="primary" class="text-h6">
                        <template v-slot:label>
                            <div class="text-subtitle-1 text-md-h6 text-info">نقدی</div>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row v-if="data.paymentType === 'shirni'">
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" class="px-6">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">{{ data.name }} گرفتگان:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                        v-for="getter in data.getters">&nbsp{{ getter }}&nbsp-
                </div>
            </v-col>
            <v-col cols="12" class="px-6">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">تاریخ:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                >&nbsp{{ data.date }}
                </div>
            </v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary">توضیحات</v-col>
            <v-col cols="12" class="px-6 text-subtitle-1 text-md-h6 text-info">
                {{ data.message }}
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" md="6" lg="4" xl="3" class="mt-4 mt-md-6 px-9">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">تاریخ:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                >&nbsp{{ data.date }}
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="4" xl="3" class="mt-4 mt-md-6 px-9">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">کد پیگیری بانکی:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                >&nbsp{{ data.transactionCode }}
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="4" xl="3" class="mt-4 mt-md-6 px-9">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">نام فرد انتقال دهنده:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                >&nbsp{{ data.sender }}
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="4" xl="3" class="mt-4 mt-md-6 px-9">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">مقدار انتقال داده شده:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                >&nbsp{{ data.amount }} تومان
                </div>
            </v-col>
            <v-col cols="12" class="px-9 text-subtitle-6 text-md-h5 text-secondary">توضیحات</v-col>
            <v-col cols="12" class="px-9 text-subtitle-1 text-md-h6 text-info">
                {{ data.message }}
            </v-col>
        </v-row>
        <v-row class="px-9 mb-2 mt-4" style="direction: ltr" v-if="data.type === 'acception'">
            <v-btn style="border-radius: 15px" class="text-white text-subtitle-1 mr-3 px-6" color="success">تایید
            </v-btn>
            <v-btn style="border-radius: 15px" class="text-white text-subtitle-1" color="error">رد</v-btn>
        </v-row>
    </v-container>
</template>

<script setup>

import {useTheme} from "vuetify";

const props = defineProps(['data'])

</script>
