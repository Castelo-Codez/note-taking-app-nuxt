import {Schema, model} from "mongoose";
import * as bcrypt from "bcrypt";

interface Note {
    title: string;
    tags: string[];
    lastEdited: string;
    subject: string;
}

interface UserType {
    username: string;
    id: string;
    email: string;
    password: string;
    Notes: Note[];
}

const UserSchema = new Schema<UserType>();

UserSchema.pre("save", async (next) => {
    let salt = await bcrypt.genSalt(10);
    //@ts-expect-error
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = model("Users", UserSchema);

export default User;
