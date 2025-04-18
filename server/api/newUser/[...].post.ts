import {connect, StringExpression} from "mongoose";
import User from "~/server/db/User";

export default defineEventHandler(async (event) => {
    let {email, password, username} = await readBody(event);
    if (!username) {
        username = email.match(/\w+(?=@)/gi).join("");
    }
    const registerObj: {
        email: string;
        password: string;
        username: string;
    } = {email, password, username};
    return connect(useRuntimeConfig().dbUrl as string)
        .then(async () => {
            try {
                let newUser = await User.create({
                    ...registerObj,
                    Notes: [],
                    id: `${Date.now()}`,
                });
                return {
                    ...registerObj,
                };
            } catch (error: any) {
                throw createError({
                    statusText: "email already exists",
                });
            }
        })
        .catch((error) => {
            return createError({
                ...error,
            });
        });
});
