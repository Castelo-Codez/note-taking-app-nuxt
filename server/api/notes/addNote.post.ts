import {getServerSession} from "#auth";
import {connect} from "mongoose";
import User from "~/server/db/User";

export default defineEventHandler(async (event) => {
    let body = await readBody(event);
    let session = await getServerSession(event);
    let {user} = session;
    let {email} = user;

    return connect(useRuntimeConfig().dbUrl)
        .then(async () => {
            let targetUser = await User.updateOne(
                {
                    email,
                },
                {
                    $push: {
                        Notes: body,
                    },
                }
            );
            return {
                status: "Note Added",
            };
        })
        .catch((error) => {
            throw new Error(`error: ${error}`);
        });
});

