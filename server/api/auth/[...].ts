import {NuxtAuthHandler} from "#auth";
import GithubProvider from "next-auth/providers/github";
export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages: {
        signIn: "/auth",
    },
    providers: [
        //@ts-expect-error
        GithubProvider.default({
            clientId: useRuntimeConfig().clientId,
            clientSecret: useRuntimeConfig().clientSec,
        }),
    ],
});
