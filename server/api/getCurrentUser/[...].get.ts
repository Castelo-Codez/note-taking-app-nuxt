import {getServerSession} from "#auth";
import {connect} from "mongoose";
import User from "~/server/db/User";
import uniqid from "uniqid";
export default eventHandler(async (event) => {
    let session = await getServerSession(event);
    const {user} = session;
    let {email, username} = user;
    return connect(useRuntimeConfig().dbUrl)
        .then(async () => {
            let checkEmail = await User.findOne({email});
            if (checkEmail) {
                let {Notes} = checkEmail;
                return {
                    Notes: Notes,
                };
            }
            if (!username) {
                username = email.match(/\w+(?=@)/gi).join("");
            }
            let {Notes} = await User.create({
                email,
                username,
                password: uniqid(),
                id: uniqid(),
                Notes: [],
            });
            return {
                Notes,
            };
        })
        .catch(() => {
            throw new Error("Connection Errors");
        });
});
