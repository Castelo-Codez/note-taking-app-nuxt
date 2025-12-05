import { connectDB } from "~/server/db/checkConn";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
  let id = getRouterParam(event, "id");
  await connectDB();
  try {
    let result = await User.updateOne(
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
    if (result.modifiedCount === 0) {
      return sendError(
        event,
        createError({
          statusCode: 404,
          statusMessage: "Note not found",
        })
      );
    }
    return {
      status: "Note deleted",
    };
  } catch (err: any) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: err.message,
      })
    );
  }
});
