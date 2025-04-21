import {connect} from "mongoose";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
    let id = getRouterParam(event, "id");
    return connect(useRuntimeConfig().dbUrl)
        .then(async () => {
            await User.updateOne(
                {
                    "Notes.id": id,
                },
                {
                    $pull: {
                        Notes: {
                            id,
                        },
                    },
                }
            );
            return {
                status: "Note deleted",
            };
        })
        .catch((error) => {
            throw new Error(`error: ${error}`);
        });
});
