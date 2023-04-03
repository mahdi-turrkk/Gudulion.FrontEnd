<template>
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="card in positionCards">
        <dash-position-card :image-src="card.imageSrc" :title="card.title" :heading="card.heading"/>
      </v-col>
    </v-row>
    <v-row class="mb-3">
      <v-col cols="12" md="6">
        <dash-list-card title="شیرنی ها" :items="shirniItems"/>
      </v-col>
      <v-col cols="12" md="6">
        <dash-list-card title="خرما ها" :items="khormaItems"/>
      </v-col>
      <v-col cols="12" md="6">
        <dash-list-card title="غرامت ها" :items="gheramatItems"/>
      </v-col>
      <v-col cols="12" md="6">
        <dash-list-card title="دولانماخ ها" :items="dolanmaxItems"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

let positionCards = ref([
  {
    imageSrc : "data:image/jpeg;base64,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",
    title : "عکس روز",
    heading : "شیرنی ترفیع شغلی",
  },
  {
    imageSrc : "_nuxt/assets/winner.png",
    title : "شیرنی بگیر ترین",
    heading : "نیلوفر شاه حسینی",
  },
  {
    imageSrc : "_nuxt/assets/loser.png",
    title : "شیرنی بده ترین",
    heading : "نیلوفر شاه حسینی",
  },
  {
    imageSrc : "_nuxt/assets/kasib.png",
    title : "ناکام ترین",
    heading : "نیلوفر شاه حسینی",
  }
])

let shirniItems = ref([
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "ترفیع شغلی",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
])
let khormaItems = ref([
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "کات",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
])
let gheramatItems = ref([
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "حمایت از ج.ا",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
])
let dolanmaxItems = ref([
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
  {
    title : "پیک نیک لیقوان",
    date : "۱۴۰۱/۰۱/۰۱-۱۵:۳۰"
  },
])


</script>
