"use server"
import {z} from "zod";

const usernameSchema = z.string().min(5).max(10);



export async function createAccount(prevState:any, date:FormData) {

    const data= {
        username: date.get("username"),
        email: date.get("email"),
        password: date.get("password"),
        comfirmPassword: date.get("comfirmPassword"),
    }
    console.log(data)

    usernameSchema.parse(data.username)

}