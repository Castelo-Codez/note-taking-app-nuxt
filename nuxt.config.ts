// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: false},
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxt/scripts",
        "@nuxt/test-utils",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@sidebase/nuxt-auth",
    ],
    colorMode: {
        preference: "system",
        classSuffix: "",
    },
    runtimeConfig: {
        clientId: process.env.CLIENT_ID,
        clientSec: process.env.CLIENT_SEC,
    },
    auth: {
        isEnabled: true,
        disableServerSideAuth: false,
        globalAppMiddleware: true,
        provider: {
            type: "authjs",
            trustHost: false,
            addDefaultCallbackUrl: true,
        },
        sessionRefresh: {
            enablePeriodically: true,
            enableOnWindowFocus: true,
        },
    },
    fonts: {
        defaults: {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            styles: ["normal", "italic"],
        },
    },

});
