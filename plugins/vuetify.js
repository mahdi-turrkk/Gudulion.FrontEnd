// plugins/vuetify.js
import { createVuetify ,ThemeDefinition  } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const lightTheme = {
    dark: false,
    colors: {
        primary: '#8BC34A',
        secondary: '#E4CD38',
        error: '#DC143C',
        info: '#333333',
        success: '#32CD32',
        warning: '#FFC107',
        background: '#F0FFF0',
    }
}

const darkTheme = {
    dark: true,
    colors: {
        primary: '#40AF46',
        secondary: '#918014',
        error: '#DC143C',
        info: '#D9D9D9',
        success: '#32CD32',
        warning: '#FFC107',
        background: '#051C07',
    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        },
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme,
                darkTheme
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})