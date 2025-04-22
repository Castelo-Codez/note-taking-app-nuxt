
import {connect} from "mongoose";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
    let {tag, body, title, id} = await readBody(event);
    return connect(useRuntimeConfig().dbUrl)
        .then(async () => {
            await User.updateOne(
                {
                    "Notes.id": id,
                },
                {
                    $set: {
                        "Notes.$.body": body,
                        "Notes.$.title": title,
                        "Notes.$.tag": tag,
                    },
                }
            );
            return {
                status: "Note updated",
            };
        })
        .catch((error) => {
            throw new Error(`error: ${error}`);
        });
});
