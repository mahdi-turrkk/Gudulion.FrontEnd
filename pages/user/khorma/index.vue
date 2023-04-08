<template>
    <v-container class="mt-16 px-lg-10" fluid>
        <shirni-list :datas="khorma"/>
    </v-container>
</template>

<script setup>

let khorma = ref([
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for accept'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'paid'
    },
    {
        trackingCode: 'TRK12345',
        title: 'کات',
        date: '۱۲ فروردین ۱۴۰۰',
        personName: 'محمد صادقی',
        status: 'pending for pay'
    },
])

</script>
