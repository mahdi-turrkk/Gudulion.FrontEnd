<template>
    <v-container class="mt-16 px-lg-10" fluid>
        <shirni-list :datas="shirni"/>
    </v-container>
</template>

<script setup>

let shirni = ref([
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'ترفیع شغلی',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
])

</script>
