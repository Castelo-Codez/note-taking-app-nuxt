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

const UserSchema = new Schema<UserType>({
    username: {
        required: true,
        type: String,
        unique: true,
    },
    id: {
        required: true,
        type: String,
        unique: true,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
    Notes: {
        required: true,
        type: [],
    },
});

UserSchema.pre("save", async function (next) {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = model("Users", UserSchema);

export default User;
