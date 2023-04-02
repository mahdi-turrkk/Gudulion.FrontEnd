<template>
  <v-container fluid class="pa-0">
    <v-row class="px-0">
      <v-col cols="0" md="6" lg="8" class="pa-0 d-none d-md-inline-block">
        <img src="~/assets/logInPageLight.jpg" class="w-100" style="object-fit: cover;height: 100.4dvh"
             alt="just a filling image"/>
      </v-col>
      <v-col cols="12" md="6" lg="4" class="pa-0" align-self="center">
        <v-card width="80%" class="mx-auto py-8 px-3 px-md-8 elevation-5 mt-12 mt-md-0" color="background" style="border-radius: 20px">
          <v-card-title class="text-primary text-h5 text-md-h4 text-center">گودولیون</v-card-title>
          <v-card-text class="mt-6">
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                  >
                    <v-text-field
                        color="primary"
                        variant="solo"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        hide-details
                        v-model="username"
                        label="نام کاربری"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                  >
                    <v-text-field
                        color="primary"
                        variant="solo"
                        bg-color="transparent"
                        style="border:1px solid;border-radius: 20px"
                        :style="{'border-color' : useTheme().current.value.colors.primary}"
                        hide-details
                        v-model="password"
                        label="رمز عبور"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn color="primary" block style="border-radius: 10px" class="py-6 text-background text-h6">ورود</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

let username = ref(undefined)
let password = ref(undefined)

</script>

<style>
.v-field--variant-solo {
  box-shadow: none;
}
</style>
