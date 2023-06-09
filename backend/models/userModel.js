import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

//Middleware for encrypting password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt= await bcrypt.genSalt(15);
    this.password=await bcrypt.hash(this.password,salt);
})

userSchema.methods.matchPassword=async function (enteredPassword){
    return bcrypt.compare(enteredPassword,this.password)
}

const User=mongoose.model('User',userSchema);

export default User;