import {connect} from "mongoose";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
    let id = getRouterParam(event, "id");
    let { status } = await readBody(event);
    return connect(useRuntimeConfig().dbUrl)
        .then(async () => {
            await User.updateOne(
                {
                    "Notes.id": id,
                },
                {
                    $set: {
                        "Notes.$.archived": status,
                    },
                }
            );
            return {
                status: "status updated",
            };
        })
        .catch((error) => {
            throw new Error(`error: ${error}`);
        });
});
