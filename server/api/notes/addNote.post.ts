import { getServerSession } from "#auth";
import { connectDB } from "~/server/db/checkConn";
import User from "~/server/db/User";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let session = await getServerSession(event);
  let { user } = session;
  let { email } = user;
  await connectDB();
  try {
    let result = await User.updateOne(
      {
        email,
      },
      {
        $push: {
          Notes: body,
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
      status: "Note Added",
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
