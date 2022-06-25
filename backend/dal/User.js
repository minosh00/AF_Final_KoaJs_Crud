const User = require("./Connection").db("users").collection("userdetails");

const ObjectID = require('mongodb').objectId;


//create user
const createUser = async({name , email, passowrd , userRole})=>{

    const result = await User.insertOne({name,email,passowrd,userRole});
    return result;
}


//get all users 
const getAllUsers  = async () =>{
    const data = await User.find();
    return data.toArray();
}



//login

const Login = async({email, passowrd})=>{
    const user = await User.findOne({"email":email});
    if(user){
        if(user?.passowrd !==passowrd){
            return {msg:'login faild'}

        }
        else{
            return {msg:"login ok" , token:user._id , userRole:user.userRole}
        }
    }
    else{
        return {msg:"login faild"}
    }
}

module.exports = {Login,createUser,getAllUsers}