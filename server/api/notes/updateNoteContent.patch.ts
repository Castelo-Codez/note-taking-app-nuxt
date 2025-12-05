import { connectDB } from "~/server/db/checkConn";
import User from "~/server/db/User";
export default defineEventHandler(async (event) => {
  let { tag, body, title, id } = await readBody(event);
  await connectDB();
  try {
    let { modifiedCount } = await User.updateOne(
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
    if (modifiedCount === 0) {
      return sendError(
        event,
        createError({
          statusCode: 404,
          statusMessage: "Note not found",
        })
      );
    }
    return {
      status: "Note updated",
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
