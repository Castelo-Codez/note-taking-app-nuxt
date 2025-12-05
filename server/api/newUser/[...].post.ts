import { connectDB } from "~/server/db/checkConn";
import uniqid from "uniqid";
import User from "~/server/db/User";

export default defineEventHandler(async (event) => {
  let { email, password } = await readBody(event);
  const registerObj: {
    email: string;
    password: string;
    id: string | number;
  } = { email, password, id: uniqid() };
  await connectDB();
  try {
    await User.create(registerObj);
    return Response.json({
      statusCode: 200,
      statusMsg: "user created Successfully",
    });
  } catch (err: any) {
    if (err.code === 11000) {
      console.log(err);
      return Response.json({
        statusCode: 11000,
        statusMsg: "Email already exists",
      });
    }
    throw err;
  }
});
