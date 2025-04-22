import {connect} from "mongoose";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
    let id = getRouterParam(event, "id");
    return connect(process.env.DB_URL as string)
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
