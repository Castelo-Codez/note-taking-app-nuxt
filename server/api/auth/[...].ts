import {NuxtAuthHandler} from "#auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import User from "~/server/db/User";
import {connect} from "mongoose";
import * as bcrypt from "bcrypt";
export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
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
                await connect(useRuntimeConfig().dbUrl).then(async () => {
                    const userIsFound = await User.findOne({email});
                    if (userIsFound) {
                        let encryptedPassword = userIsFound.password;
                        let checkPasswordIsCorrect = await bcrypt.compare(
                            password,
                            encryptedPassword
                        );
                        if (checkPasswordIsCorrect) {
                            return userIsFound;
                        }
                        throw new Error("password is incorrect");
                    }
                    throw new Error("email doesn't exist");
                });
            },
        }),
    ],
});
