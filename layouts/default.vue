<template>
  <v-app app style="direction: rtl">
    <v-app-bar :elevation="0" color="primary" class="mb-16">
      <v-btn icon class="d-inline-block d-md-none" @click="drawer = !drawer">
        <v-icon color="background" size="30">mdi-menu</v-icon>
      </v-btn>
      <div class="text-background text-h6 text-md-h5 d-inline-block mr-2 mr-lg-10">گودولیون</div>
      <v-spacer/>
      <div class="d-none d-md-inline-block">
        <div class="d-inline-block">
          <nuxt-link
              to="/user"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >داشبورد</nuxt-link>
        </div>
        <div class="d-inline-block">
          <nuxt-link
              to="/user/shirni"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >شیرنی</nuxt-link>
        </div>
        <div class="d-inline-block">
          <nuxt-link
              to="/user/khorma"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >خرما</nuxt-link>
        </div>
        <div class="d-inline-block">
          <nuxt-link
              to="/user/gheramat"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >غرامت</nuxt-link>
        </div>
        <div class="d-inline-block">
          <nuxt-link
              to="/user/dolanmax"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >دولانماخ</nuxt-link>
        </div>
        <div class="d-inline-block">
          <nuxt-link
              to="/user/darxast"
              class="text-decoration-none text-background text-subtitle-1 text-md-h6 mx-3 pb-2 px-1"
              active-class="activeLink" :style="{'border-color' : useTheme().current.value.colors.background}"
          >درخواست</nuxt-link>
        </div>
      </div>
      <v-spacer/>
      <v-menu>
        <template v-slot:activator="{ props }">
          <div class="d-inline-block" v-bind="props" style="cursor: pointer">
            <v-icon color="background" size="30">mdi-account</v-icon>
            <v-icon color="background">mdi-menu-down</v-icon>
          </div>
        </template>
        <v-list :style="{'background-color' : useTheme().current.value.colors.background}" class="mt-1" style="direction: rtl">
          <v-list-item>
            <v-avatar class="d-inline-block">
              <v-img
                  :src="user.image"
                  style="object-fit: cover !important"
                  alt="avatar"
              />
            </v-avatar>
            <div class="d-inline-block mr-4 text-info">{{user.name}}</div>
          </v-list-item>
          <v-list-item style="cursor: pointer">
            <v-icon color="info" size="30">mdi-logout</v-icon>
            <div class="d-inline-block mr-4 text-info">خروج از حساب کاربری</div>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="d-inline-block ml-2 ml-lg-8 mr-4" >
        <v-badge style="cursor: pointer" content="0" color="error">
          <v-icon color="background" size="28">mdi-bell</v-icon>
        </v-badge>
      </div>
    </v-app-bar>
    <v-navigation-drawer
        app
        color="primary"
        v-model="drawer"
        location="right"
        temporary
    >
      <v-list density="compact" nav>
        <v-list-item>
          <nuxt-link
              to="/user"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-view-dashboard</v-icon>
            داشبورد</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link
              to="/user/shirni"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-candy</v-icon>
            شیرنی</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link
              to="/user/khorma"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-emoticon-sad</v-icon>
            خرما</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link
              to="/user/gheramat"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-emoticon-angry</v-icon>
            غرامت</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link
              to="/user/dolanmax"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-beach</v-icon>
            دولانماخ</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link
              to="/user/darxast"
              class="text-decoration-none text-background text-h6 pb-2 px-1"
              active-class="activeDash" :style="{'border-color' : useTheme().current.value.colors.background}"
          >
            <v-icon color="background ml-3">mdi-hand-extended</v-icon>
            درخواست</nuxt-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <slot/>
    <v-footer class="bg-primary">
      <v-row justify="center" no-gutters>
        <v-col class="text-center text-background" cols="12">
          Made With ❤️ In GUDULION
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script setup>
import {useTheme} from "vuetify";

let drawer = ref(false)
let user = reactive({name : "نیلوفر شاه حسینی" , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kd2hHYncksEm89obcsVbQoT5px2bQcSWaA&usqp=CAU'})
</script>

<style>
.activeLink{
  border-bottom: 2px solid;
}
.v-img__img--contain {
  object-fit: cover;
}
.activeDash{

}
</style>

