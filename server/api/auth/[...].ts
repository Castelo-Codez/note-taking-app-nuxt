import {NuxtAuthHandler} from "#auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages: {
        signIn: "/auth",
        
    },
    providers: [
        //@ts-expect-error
        GithubProvider.default({
            clientId: "Ov23liQfcRWhkli5om4u",
            clientSecret: "911fe5e873bc755f96dd638ce7ef5c86a391ee2d",
        }),
    ],
});
