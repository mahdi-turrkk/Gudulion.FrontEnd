<template>
    <v-container fluid class="mt-16 px-lg-10">
        <v-row>
            <v-col cols="12" class="text-h5 text-md-h4 text-primary">مشخصات</v-col>
            <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">عنوان:</div>
                <div class="text-subtitle-1 text-md-h6 text-info d-inline-block">&nbsp{{ darxastInfo.title }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">نوع:</div>
                <div class="text-subtitle-1 text-md-h6 text-info d-inline-block">&nbsp{{ darxastInfo.type }}</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6" lg="5" xl="3">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">درخواست ارایه شده توسط:</div>
                <div class="text-subtitle-1 text-md-h6 text-info d-inline-block">&nbsp{{ darxastInfo.fromUser }}</div>
            </v-col>
            <v-col cols="12" md="6" lg="5" xl="3">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">درخواست شیرنی از:</div>
                <div class="text-subtitle-1 text-md-h6 text-info d-inline-block">&nbsp{{ darxastInfo.toUser }}</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">تاریخ:</div>
                <div class="text-subtitle-1 text-md-h6 text-info d-inline-block">&nbsp{{ darxastInfo.date }}</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">وضعیت درخواست:</div>
            </v-col>
            <v-col cols="12" class="px-6">
                <div class="text-h6 text-md-h5 text-success">تایید شده توسط:</div>
                <div class="text-h6 text-md-h5 text-info mt-3">
                    <div class="d-inline-block ml-10" v-for="person in darxastInfo.acceptedBy">{{person}}</div>
                </div>
                <div class="text-h6 text-md-h5 text-warning mt-4">در انتظار تایید توسط:</div>
                <div class="text-h6 text-md-h5 text-info mt-3">
                    <div class="d-inline-block ml-10" v-for="person in darxastInfo.pendingBy">{{person}}</div>
                </div>
                <div class="text-h6 text-md-h5 text-error mt-4">رد شده توسط:</div>
                <div class="text-h6 text-md-h5 text-info mt-3">
                    <div class="d-inline-block ml-10" v-for="person in darxastInfo.rejectedBy">{{person}}</div>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="text-h6 text-md-h5 text-secondary">توضیحات درخواست:</div>
                <div class="text-h6 text-md-h5 text-info mt-3">{{ darxastInfo.description}}</div>
            </v-col>
            <v-col cols="12">
                <div class="text-h6 text-md-h5 text-secondary d-inline-block">دلایل رد:</div>
                <div v-for="comment in darxastInfo.comments" class="my-4">
                    <comment-card :data="comment"/>
                    <v-divider color="secondary" class="border-opacity-100 mt-4"></v-divider>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" style="direction: ltr">
                <v-btn color="success" style="border-radius: 15px" class="text-background mr-3">تایید درخواست</v-btn>
                <v-btn color="error" style="border-radius: 15px" class="text-background">رد درخواست</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

let darxastInfo = reactive({
    title : "ترفیع شغلی",
    type : "شیرنی",
    fromUser : "علیرضا احمدی‌نژاد",
    toUser : "سجاد علیپور",
    date : " ۱۲ فروردین ۱۴۰۰",
    acceptedBy : ['زهرا محمدی','علیرضا احمدی‌نژاد'],
    pendingBy : ['علی صدرنژاد','سارا خانی','سمیه میری'],
    rejectedBy : ['نیلوفر شاه‌حسینی'],
    description : 'سلام،\n' +
        'امیدوارم حالتون خوب باشه. من به خاطر ترفیع شغلی سجاد  به دنبال یک شیرنی مناسب از او هستم. من می‌خواهم اگر ممکن است با تایید این درخواست این شیرنی را به گردن او بیاندازید\n' +
        'با تشکر.',
    comments : [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU',
            name: 'نیلوفر شاه حسینی',
            message: 'سلام،\n' +
                'به نظر من بزاریم حقوق اولشو بگیره بعد براش شیرنی ثبت کنیم.'
        },
    ]

})

</script>