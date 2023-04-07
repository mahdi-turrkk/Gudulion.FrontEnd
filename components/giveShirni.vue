<template>
    <v-container fluid class="pa-0 ma-0 mt-2">
        <v-row class="text-primary text-h5 text-md-h4 justify-center">{{ data.title }}</v-row>
        <v-row class="mt-md-5">
            <v-col cols="12" md="8" lg="6">
                <single-drag-drop-input @filesChanged="addImage"/>
            </v-col>
            <v-col cols="12" md="4" lg="6">
                <v-radio-group v-model="paymentType" class="mt-md-4">
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
        <v-row v-if="paymentType === 'shirni'">
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary">{{ data.name }} گرفتگان</v-col>
            <v-col cols="12" class="px-6">
                <v-select
                        closable-chips
                        multiple
                        chips
                        label="اسامی"
                        :items="groupMembers"
                        v-model="shirniPayment.getters"
                        color="primary"
                        variant="solo"
                        bg-color="transparent"
                        :menu-props="{class : menuClass}"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        class="text-primary"
                        hide-details
                ></v-select>
            </v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary">تاریخ</v-col>
            <v-col cols="12" md="6" lg="4" class="px-6">
                <!--               TODO jalali date picker-->
            </v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary">توضیحات</v-col>
            <v-col cols="12" class="px-6 text-secondary">
                <v-textarea
                        label="توضیحات"
                        variant="solo"
                        v-model="shirniPayment.message"
                        color="primary"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        class="text-primary"
                        hide-details
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" md="6" class="mt-4 mt-md-6 px-9">
                <v-row class=" mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">تاریخ</v-row>
                <v-row>
                    <!--               TODO jalali date picker-->
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="mt-4 mt-md-6 px-9">
                <v-row cols="12" md="6" class="mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">کد پیگیری بانکی
                </v-row>
                <v-row>
                    <v-text-field
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            hide-details
                            v-model="cashPayment.transactionCode"
                            label="کد پیگیری بانکی"
                            class="text-primary"
                    ></v-text-field>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="mt-4 mt-md-6 px-9">
                <v-row cols="12" md="6" class="mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">نام فرد انتقال
                    دهنده
                </v-row>
                <v-row>
                    <v-text-field
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            hide-details
                            v-model="cashPayment.sender"
                            label="نام فرد"
                            class="text-primary"
                    ></v-text-field>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="mt-4 mt-md-6 px-9">
                <v-row cols="12" md="6" class="mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">مقدار انتقال داده
                    شده
                </v-row>
                <v-row>
                    <v-text-field
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            hide-details
                            v-model="cashPayment.amount"
                            label="مقدار"
                            class="text-primary"
                            type="number"
                    ></v-text-field>
                </v-row>
            </v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary">توضیحات</v-col>
            <v-col cols="12" class="px-6 text-secondary">
                <v-textarea
                        label="توضیحات"
                        variant="solo"
                        v-model="cashPayment.message"
                        color="primary"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        class="text-primary"
                        hide-details
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row class="px-6 mb-2 mt-4" style="direction: ltr">
            <v-btn style="border-radius: 15px" class="text-white text-subtitle-1 mr-3 px-6" color="success">ثبت</v-btn>
            <v-btn style="border-radius: 15px" class="text-white text-subtitle-1" color="error">بازگشت</v-btn>
        </v-row>
    </v-container>
</template>

<script setup>

import {useTheme} from "vuetify";

const theme = useTheme()

const props = defineProps(['data'])
let paymentType = ref('cash')
let paymentImage = ref(undefined)

let shirniPayment = reactive({
    getters: [],
    message: undefined
})

let cashPayment = reactive({
    transactionCode: undefined,
    sender: undefined,
    amount: undefined,
    message: undefined
})

const menuClass = computed(() => {
    if (!theme.current.value.dark)
        return 'light-menu-class'
    else
        return 'dark-menu-class'
})

function addImage(image) {
    paymentImage = image
}

let groupMembers = ref(['سارا خانی', 'نیلوفر شاه‌حسینی', 'سمیه میری', 'زهرا محمدی', 'سجاد علیپور', 'علیرضا احمدی‌نژاد', 'علی صدرنژاد'])


</script>

<style>
.v-field--variant-solo {
    box-shadow: none;
}

.light-menu-class .v-overlay__content .v-list {
    background-color: #F0FFF0;
    color: #8BC34A;
    direction: rtl
}

.dark-menu-class .v-overlay__content .v-list {
    background-color: #051C07;
    color: #40AF46;
    direction: rtl
}
</style>