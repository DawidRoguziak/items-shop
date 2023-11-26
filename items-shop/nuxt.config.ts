// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: import.meta.env.BASE_URL,
        }
    },
    devServer: {
        port: 3030,
    },
    srcDir: 'src',
    devtools: {enabled: true},
    image: {
        domains: ['127.0.0.1:8090']
    },
    css: ['~/assets/css/base.css', '~/assets/scss/common.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/image',
    ],
    i18n: {
        strategy: 'prefix',
        legacy: false,
        langDir: 'langs',
        defaultLocale: 'en',
        locales: [
            {code: 'en', iso: 'en-US', file: 'en-US.json'},
            {code: 'pl', iso: 'pl-PL', file: 'pl-PL.json'},
        ],
    }
})
