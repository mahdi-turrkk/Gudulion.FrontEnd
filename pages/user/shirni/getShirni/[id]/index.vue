<template>
    <v-container class="mt-16 px-lg-10" fluid>
        <get-shirni :data="shirniData"/>
    </v-container>
</template>

<script setup>

let shirniData = reactive({
    paymentType: "shirni",
    transactionCode: 'TRC-1233',
    sender: 'سجاد علیپور',
    amount: '100000',
    name: "شیرنی",
    title: "ترفیع شغلی",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMQyBYA76apikEVfsrX7bygH5clskOvUjm167T7ocz1_cFNu8dbygaTghxlcw_lwnDmQ&usqp=CAU",
    getters: ['سارا خانی', 'نیلوفر شاه‌حسینی', 'سمیه میری', 'زهرا محمدی', 'سجاد علیپور', 'علیرضا احمدی‌نژاد', 'علی صدرنژاد'],
    date: '۱۲ فروردین ۱۴۰۲',
    message: 'با دوستانمان برای گذراندن یک شب خوب، به یک رستوران شیک و مدرن در مرکز شهر رفتیم. ابتدا انتخاباتی از منوی غذایی با غذاهای خوشمزه و شیک آغاز شد و پس از غذا، شیرینی و نوشیدنی هایی نیز انتخاب کردیم. بعد از خوردن، به یک مکان دیگر برای نوشیدنی و گفتگو پرداختیم . کل شب بسیار خوش گذشت و همه از تجربه لذت بردیم.',
    type: 'acception'
})
</script>