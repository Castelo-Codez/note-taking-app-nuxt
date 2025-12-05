
import { connectDB } from "~/server/db/checkConn";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
  let id = getRouterParam(event, "id");
  let { status } = await readBody(event);
  await connectDB();
  try {
    let result = await User.updateOne(
      {
        "Notes.id": id,
      },
      {
        $set: {
          "Notes.$.archived": status,
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
      status: "status updated",
    };
  } catch (err: any) {
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: err.message,
      })
    );
  }
});
