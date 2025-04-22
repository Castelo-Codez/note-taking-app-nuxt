// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: false},
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxt/test-utils",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@sidebase/nuxt-auth",
        "@nuxt/test-utils/module",
    ],
    colorMode: {
        classSuffix: "",
    },
    experimental: {
        defaults: {
            nuxtLink: {
                activeClass: "active-route",
            },
        },
    },
    runtimeConfig: {
        clientId: process.env.CLIENT_ID,
        clientSec: process.env.CLIENT_SEC,
        dbUrl: process.env.DB_URL,
        secret: process.env.CLIENT_AUTH_SEC,
    },
    auth: {
        isEnabled: true,
        disableServerSideAuth: false,
        globalAppMiddleware: true,
        originEnvKey: process.env.NUXT_AUTH_ORIGIN,
        baseURL: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/api/auth`
            : undefined,
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
