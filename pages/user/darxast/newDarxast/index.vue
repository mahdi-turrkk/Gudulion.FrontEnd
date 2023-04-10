<template>
    <v-container fluid class="mt-16 px-lg-10">
        <v-row>
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" md="6" lg="4" class="mt-4 mt-md-6 px-9">
                <v-row class=" mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">عنوان</v-row>
                <v-row>
                    <v-text-field
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            hide-details
                            v-model="darxast.title"
                            label="عنوان"
                            class="text-primary"
                    ></v-text-field>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" lg="4" class="mt-4 mt-md-6 px-9">
                <v-row class=" mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">نوع</v-row>
                <v-row>
                    <v-select
                            label="انتخاب کنید ..."
                            :items="['شیرنی','خرما','غرامت']"
                            v-model="darxast.type"
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            :menu-props="{class : menuClass}"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            class="text-primary"
                            hide-details
                    ></v-select>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" lg="4" class="mt-4 mt-md-6 px-9">
                <v-row class=" mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">تاریخ</v-row>
                <v-row>
                    <!--                    TODO add jalali datepicker-->
                </v-row>
            </v-col>
            <v-col cols="12" md="6" lg="4" class="mt-4 mt-md-6 px-9">
                <v-row class=" mb-4 mb-md-5 text-h6 text-md-h5 text-secondary">درخواست شیرنی از</v-row>
                <v-row>
                    <v-select
                            label="انتخاب کنید ..."
                            :items="groupMembers"
                            v-model="darxast.toUser"
                            color="primary"
                            variant="solo"
                            bg-color="transparent"
                            :menu-props="{class : menuClass}"
                            style="border:1px solid;border-radius: 20px"
                            :style="{'border-color' : useTheme().current.value.colors.primary}"
                            class="text-primary"
                            hide-details
                    ></v-select>
                </v-row>
            </v-col>
            <v-col cols="12" class="px-6 text-h6 text-md-h5 text-secondary mt-6">توضیحات درخواست :</v-col>
            <v-col cols="12" class="px-6 text-secondary">
                <v-textarea
                        label="توضیحات"
                        variant="solo"
                        v-model="darxast.message"
                        color="primary"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        class="text-primary"
                        hide-details
                ></v-textarea>
            </v-col>
            <v-col cols="12" class="px-6" style="direction: ltr">
                <v-btn color="success" class="text-background mr-2 px-8" style="border-radius: 15px">ثبت</v-btn>
                <v-btn color="error" class="text-background" style="border-radius: 15px">بازگشت</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

const theme = useTheme()

let darxast = reactive({
    title: undefined,
    type: undefined,
    toUser: undefined,
    message: undefined,
})

let groupMembers = ref(['سارا خانی', 'نیلوفر شاه‌حسینی', 'سمیه میری', 'زهرا محمدی', 'سجاد علیپور', 'علیرضا احمدی‌نژاد', 'علی صدرنژاد'])

const menuClass = computed(() => {
    if (!theme.current.value.dark)
        return 'light-menu-class'
    else
        return 'dark-menu-class'
})


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