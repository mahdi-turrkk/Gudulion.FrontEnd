<template>
    <v-container fluid class="pa-0 ma-0">
        <v-row class="px-2">
            <v-col cols="12" sm="6" md="5" lg="4" xl="3" class="px-0">
                <v-text-field
                        label="فیلتر بر اساس نام فرد"
                        variant="underlined"
                        color="primary"
                        append-icon="mdi-filter"
                        @click:append="filter"
                        :style="{'color' : useTheme().current.value.colors.primary}"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-card color="primary" elevation="5" class="py-1 px-2" style="border-radius: 20px">
            <div class="py-2 px-4 d-none d-lg-block">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 12%">کد رهگیری</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 20%">عنوان
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 20%">تاریخ
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 20%">نام فرد
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 16%">وضعیت
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 12%">عمل ها
                </div>
            </div>
            <div class="py-2 px-4 d-none d-sm-block d-lg-none">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 33%">عنوان</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 35%">وضعیت
                </div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 30%">عمل ها
                </div>
            </div>
            <div class="py-2 px-4 d-block d-sm-none">
                <div class="d-inline-block text-h6 text-md-h5 text-background" style="width: 45%">عنوان</div>
                <div class="d-inline-block text-h6 text-md-h5 text-background text-center" style="width: 50%">وضعیت
                </div>
            </div>
        </v-card>
        <v-row class="my-4 px-3" v-for="data in datas">
            <shirni-list-item :data="data"/>
        </v-row>
        <v-row style="direction: ltr" class="mt-8 mb-1 px-2">
            <v-pagination
                    v-model="page"
                    :length="pages"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    variant="elevated"
                    color="background"
                    density="comfortable"
                    active-color="primary"
                    total-visible="5"
            ></v-pagination>
        </v-row>
    </v-container>
</template>

<script setup>
import {useTheme} from "vuetify";

const props = defineProps(['datas'])
let page = ref(1)
let pages = ref(100)

function filter() {
//     filter function goes here
}

</script>
