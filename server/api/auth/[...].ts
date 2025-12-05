import * as bcrypt from "bcrypt";
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import User from "~/server/db/User";
import { connectDB } from "~/server/db/checkConn";

export default NuxtAuthHandler({
  secret: process.env.CLIENT_AUTH_SEC,
  pages: {
    signIn: "/auth",
    error: "/auth",
  },
  providers: [
    //@ts-expect-error
    GithubProvider.default({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SEC,
    }),
    //@ts-expect-error
    Credentials.default({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(
        credentials: { email: string; password: string },
        req: any
      ) {
        const { email, password } = credentials;
        try {
          await connectDB();
          const user = await User.findOne({ email });
          if (!user) {
            throw createError({
              statusCode: 404,
              statusMessage: "Email Doesn't Exists",
            });
          }
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            throw createError({
              statusCode: 401,
              statusMessage: "Invalid Password",
            });
          }
          return {
            email,
          };
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
});
