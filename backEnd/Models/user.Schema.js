// import mongoose form 'mongoose';         ------apply mongoose to work 

const userSchema = new mongoose.Schema({
    name: 'string',
    email: 'string',
    password: 'string'
})

const User = new mongoose.model("User", userSchema);

export default User;