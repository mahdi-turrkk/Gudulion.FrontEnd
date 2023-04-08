<template>
    <v-container fluid class="mt-16 px-lg-10">
        <v-row class="text-primary text-h5 text-md-h4 justify-center">{{ dolanmaxInfo.title }}</v-row>
        <v-row class="mt-md-8">
            <v-col cols="12" lg="8" xl="7" class="text-center">
                <v-carousel
                        :continuous="true"
                        v-model="onboardingImage"
                        show-arrows="hover"
                        hide-delimiter-background
                        style="border-radius: 20px;aspect-ratio: 16/9;direction: ltr"
                        :height="carouselHeight"
                        prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"
                >
                    <v-carousel-item
                            v-for="image in dolanmaxInfo.images"
                    >
                        <v-img
                                :src="image"
                                style="aspect-ratio: 16/9;border-radius: 20px"
                                class="mx-auto"
                        />
                    </v-carousel-item>
                </v-carousel>
                <v-slide-group
                        style="direction: ltr"
                        v-model="onboardingImage"
                        class="py-4"
                        show-arrows
                        center-active
                        prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"
                >
                    <v-slide-group-item
                            v-for="image in dolanmaxInfo.images"
                            v-slot="{ isSelected, toggle }"
                    >
                        <v-card
                                class="mx-3"
                                color="transparent"
                                :height="imageList.height"
                                :width="imageList.width"
                                style="border-radius: 20px"
                                @click="toggle"
                        >
                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                    <v-img :src="image"/>
                                </v-scale-transition>
                            </div>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
                <v-btn color="primary" class="text-background mt-2" append-icon="mdi-plus-thick" size="large"
                       style="border-radius: 15px">افزودن عکس
                </v-btn>
            </v-col>
            <v-col cols="12" lg="4" xl="5">
                <v-row>
                    <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
                    <v-col cols="12">
                        <div class="text-h6 text-md-h5 text-secondary d-inline-block">حاضران در دولانماخ:</div>
                        <div
                                class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                                v-for="person in dolanmaxInfo.people">&nbsp{{ person }}&nbsp-
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="text-h6 text-md-h5 text-secondary d-inline-block">تاریخ شروع:</div>
                        <div
                                class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                        >{{ dolanmaxInfo.startDate }}
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="text-h6 text-md-h5 text-secondary d-inline-block">تاریخ پایان:</div>
                        <div
                                class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                        >{{ dolanmaxInfo.endDate }}
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="text-h6 text-md-h5 text-secondary d-inline-block">محل:</div>
                        <div
                                class="text-subtitle-1 text-md-h6 text-info d-inline-block"
                        >{{ dolanmaxInfo.location }}
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="mt-md-6">
            <v-col cols="12">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">توضیحات:</div>
                <div
                        class="text-subtitle-1 text-md-h6 text-info d-inline-block">
                    {{ dolanmaxInfo.description }}
                </div>
            </v-col>
            <v-col cols="12">
                <div class="text-h6 text-md-h5  text-secondary d-inline-block">هزینه ها:</div>
                <div v-if="useDisplay().lgAndUp.value">
                    <v-card color="primary" elevation="5" class="py-1 px-2 my-4" style="border-radius: 20px">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 10%">
                                ردیف
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 25%">
                                عنوان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 23%">
                                تاریخ
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 22%">
                                پرداخت کننده
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 20%">
                                مقدار پرداختی
                            </div>
                        </div>
                    </v-card>
                </div>
                <div v-if="useDisplay().md.value || useDisplay().sm.value">
                    <v-card color="primary" elevation="5" class="py-1 px-2 my-4" style="border-radius: 20px">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background"
                                 style="width: 20%">
                                ردیف
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 40%">
                                عنوان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 40%">
                                مقدار پرداختی
                            </div>
                        </div>
                    </v-card>
                </div>
                <div v-if="useDisplay().xs.value">
                    <v-card color="primary" elevation="5" class="py-1 px-2 my-4" style="border-radius: 20px">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background"
                                 style="width: 30%">
                                ردیف
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-background text-center"
                                 style="width: 70%">
                                مقدار پرداختی
                            </div>
                        </div>
                    </v-card>
                </div>
                <transaction-list-item v-for="(transaction , index) in transactions" class="my-4" :index="index+1"
                                       :data="transaction"/>
                <div v-if="useDisplay().lgAndUp.value" style="direction: ltr">
                    <v-card color="background" elevation="5" class="py-1 px-2 my-4"
                            style="border-radius: 20px;width: 40%">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                {{ totalTransaction }} تومان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                جمع کل
                            </div>
                        </div>
                    </v-card>
                </div>
                <div v-if="useDisplay().md.value " style="direction: ltr">
                    <v-card color="background" elevation="5" class="py-1 px-2 my-4"
                            style="border-radius: 20px;width: 50%">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                {{ totalTransaction }} تومان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                جمع کل
                            </div>
                        </div>
                    </v-card>
                </div>
                <div v-if="useDisplay().sm.value " style="direction: ltr">
                    <v-card color="background" elevation="5" class="py-1 px-2 my-4"
                            style="border-radius: 20px;width: 65%">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                {{ totalTransaction }} تومان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                جمع کل
                            </div>
                        </div>
                    </v-card>
                </div>
                <div v-if="useDisplay().xs.value " style="direction: ltr">
                    <v-card color="background" elevation="5" class="py-1 px-2 my-4" style="border-radius: 20px">
                        <div class="py-2 px-4">
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                {{ totalTransaction }} تومان
                            </div>
                            <div class="d-inline-block text-subtitle-1 text-md-h6 text-info text-center"
                                 style="width: 50%;direction: rtl">
                                جمع کل
                            </div>
                        </div>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" class="mb-16">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">نظرات:</div>
                <div v-for="comment in comments" class="my-4">
                    <comment-card :data="comment"/>
                    <v-divider color="secondary" class="border-opacity-100 mt-4"></v-divider>
                </div>
                <v-list-item>
                    <v-avatar class="d-inline-block" size="large">
                        <v-img
                                :src="user.image"
                                style="object-fit: cover !important"
                                alt="avatar"
                        />
                    </v-avatar>
                    <div class="d-inline-block text-subtitle-1 text-md-h6 mr-4 text-info">{{ user.name }}</div>
                </v-list-item>
                <v-textarea
                        label="نظر شما در مورد این دولانماخ ..."
                        variant="solo"
                        v-model="user.message"
                        color="primary"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        class="text-primary mx-9 mt-4"
                        hide-details
                ></v-textarea>
                <div style="direction: ltr" class="px-9 mt-4">
                    <v-btn color="success" style="border-radius: 15px" class="text-background">ثبت نظر</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

import {useDisplay, useTheme} from "vuetify";

const user = reactive({
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
    name: 'نیلوفر شاه حسینی',
    message: ''
})

const display = useDisplay()

let comments = ref([
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
        name: 'نیلوفر شاه حسینی',
        message: 'پیک نیک خیلی خوب و جالبی بود. هوای لیقوان واقعا زیبا و طبیعی بود و غذاهایی که دوستان برای این پیک نیک آماده کرده بودند بسیار خوشمزه بود. بازی‌هایی که با هم انجام دادیم هم خیلی سرگرم‌کننده بود. حتی زمانی که باید برگشتیم به خانه احساس کردیم که زود گذشته و خیلی خوش‌گذشت.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
        name: 'نیلوفر شاه حسینی',
        message: 'پیک نیک خیلی خوب و جالبی بود. هوای لیقوان واقعا زیبا و طبیعی بود و غذاهایی که دوستان برای این پیک نیک آماده کرده بودند بسیار خوشمزه بود. بازی‌هایی که با هم انجام دادیم هم خیلی سرگرم‌کننده بود. حتی زمانی که باید برگشتیم به خانه احساس کردیم که زود گذشته و خیلی خوش‌گذشت.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
        name: 'نیلوفر شاه حسینی',
        message: 'پیک نیک خیلی خوب و جالبی بود. هوای لیقوان واقعا زیبا و طبیعی بود و غذاهایی که دوستان برای این پیک نیک آماده کرده بودند بسیار خوشمزه بود. بازی‌هایی که با هم انجام دادیم هم خیلی سرگرم‌کننده بود. حتی زمانی که باید برگشتیم به خانه احساس کردیم که زود گذشته و خیلی خوش‌گذشت.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
        name: 'نیلوفر شاه حسینی',
        message: 'پیک نیک خیلی خوب و جالبی بود. هوای لیقوان واقعا زیبا و طبیعی بود و غذاهایی که دوستان برای این پیک نیک آماده کرده بودند بسیار خوشمزه بود. بازی‌هایی که با هم انجام دادیم هم خیلی سرگرم‌کننده بود. حتی زمانی که باید برگشتیم به خانه احساس کردیم که زود گذشته و خیلی خوش‌گذشت.'
    },
])

let transactions = ref([
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    }, {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
    {
        title: 'خرید بال مرغ',
        date: ' ۱۲ فروردین ۱۴۰۰',
        payer: 'محمد علیزاده',
        amount: '۵۰۰۰۰۰'
    },
])

let totalTransaction = ref('۴۰۰۰۰۰۰')

let dolanmaxInfo = reactive({
    title: 'پیک نیک یک روزه لیقوان',
    images: ['data:image/jpeg;base64,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', 'data:image/jpeg;base64,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'],
    people: ['سارا خانی', 'نیلوفر شاه‌حسینی', 'سمیه میری', 'زهرا محمدی', 'سجاد علیپور', 'علیرضا احمدی‌نژاد', 'علی صدرنژاد'],
    startDate: '۱۲ فروردین ۱۴۰۲',
    endDate: '۱۲ فروردین ۱۴۰۲',
    location: 'لیقوان',
    description: 'یک روز بهاری، من و دوستانم به منطقه لیقوان سفر کردیم تا از طبیعت زیبای این منطقه لذت ببریم. با خودمان غذا و نوشیدنی‌هایی برای پیک‌نیک آماده کرده بودیم. پس از رسیدن به محل پیک‌نیک، بسته‌های خود را باز کردیم و از غذا و نوشیدنی‌های خود لذت بردیم. هوای پاییزی درختان پوشیده از برگ‌های زرد و قرمز و صدای طبیعت زیبای این منطقه، تجربه‌ی فوق‌العاده‌ای برایمان به ارمغان آورد. بعد از ناهار، کوهنوردی و پیاده‌روی در این منطقه را تجربه کردیم و از چشم‌انداز و مناظر زیبایی که در سفر خود دیدیم، لذت بردیم. سپس در شب به محل اقامتمان خود بازگشتیم و بعد از شام، با تجربه‌های جدیدی که در سفر خود به دست آورده بودیم، خاطرات خوبی را با هم به یادگار گذاشتیم.'
})

let carouselHeight = computed(() => {
    if (display.xs.value)
        return 180
    else if (display.sm.value)
        return 320
    else if (display.md.value)
        return 500
    else if (display.mdAndUp.value && display.lgAndDown.value)
        return 490
    else
        return 600
})

let imageList = computed(() => {
    if (display.xs.value)
        return {height: 80, width: 142}
    else if (display.sm.value)
        return {height: 90, width: 160}
    else if (display.md.value)
        return {height: 100, width: 177}
    else if (display.mdAndUp.value && display.lgAndDown.value)
        return {height: 110, width: 195}
    else
        return {height: 120, width: 216}
})

let onboardingImage = ref(0)


</script>