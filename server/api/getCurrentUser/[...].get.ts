import { getServerSession } from "#auth";
import { connect } from "mongoose";
import User from "~/server/db/User";
import uniqid from "uniqid";
import { connectDB } from "~/server/db/checkConn";
export default eventHandler(async (event) => {
  let session = await getServerSession(event);
  if (!session || !session.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  let { email } = session.user
  await connectDB();
  try {
    let checkEmail = await User.findOne({ email });
    if (checkEmail) {
      let { Notes } = checkEmail;
      console.log(Notes)
      return {
        Notes: Notes,
      };
    }
    await User.create({
      email: email,
      password: uniqid(),
      id: uniqid(),
      Notes: [],
    });
    return {
      Notes: [],
    };
  } catch (err) {
    throw err;
  }
});
