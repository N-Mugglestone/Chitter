import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    userHandle: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, reuqire: true }
})

const User = new mongoose.model("User", userSchema);

export default User;