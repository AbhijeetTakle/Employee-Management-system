import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const userschema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userschema);

export default user;