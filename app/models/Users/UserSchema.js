import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String
});

mongoose.model('users', UserSchema);

export default UserSchema;