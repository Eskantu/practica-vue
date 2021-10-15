import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: [true, 'username is required'] },
    password: { type: String, required: [true, "password is required"] },
    email: { type: String, required: [true, "email is required"] },
    created: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    createdFor: { type: String, required: [true, 'superUser'] },
    modules: { type: Array }
})

const User = mongoose.model('User', userSchema)
export default User