import axios from 'axios';

const LoginURL ='http://localhost:3000/user/login';
const RegisterURL = "http://localhost:3000/user/register";

export async function loginFunction(data){

    let alldata = {
        email: data.email,
        passowrd: data.passowrd
    }

    return await axios.post(LoginURL , alldata);
}

export async function RegisterUsers(data){

    var alldata={
      
        name:data?.name,
        email:data?.email,
        passowrd:data?.passowrd,
        userRole:data?.userRole
    }

return await axios.post(RegisterURL , alldata)


}

