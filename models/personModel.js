import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema({
    id : Number,
    name : String
})

const User = mongoose.model('User', userSchema)

export default User