import {NuxtAuthHandler} from "#auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import User from "~/server/db/User";
import {connect} from "mongoose";
import * as bcrypt from "bcrypt";
export default NuxtAuthHandler({
    secret: useRuntimeConfig().secret,
    pages: {
        signIn: "/auth",
        error: "/auth",
    },
    providers: [
        //@ts-expect-error
        GithubProvider.default({
            clientId: useRuntimeConfig().clientId,
            clientSecret: useRuntimeConfig().clientSec,
        }),
        //@ts-expect-error
        Credentials.default({
            name: "credentails",
            credentials: {
                email: {label: "email", type: "text"},
                password: {lable: "password", type: "text"},
            },
            async authorize(credentials: any, req: any) {
                const {email, password} = credentials;
                return connect(process.env.DB_URL as string).then(async () => {
                    const userIsFound = await User.findOne({email});
                    if (userIsFound) {
                        let encryptedPassword = userIsFound.password;
                        let checkPasswordIsCorrect = await bcrypt.compare(
                            password,
                            encryptedPassword
                        );
                        if (checkPasswordIsCorrect) {
                            return {
                                ...{email, password},
                            };
                        }
                        throw createError("password is incorrect");
                    }
                    throw createError("email doesn't exist");
                });
            },
        }),
    ],
});
