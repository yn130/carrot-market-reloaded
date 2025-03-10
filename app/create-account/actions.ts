"use server"
import {z} from "zod";

const formSchema = z.object({
    username: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
})

export async function createAccount(prevState:any, date:FormData) {

    const data= {
        username: date.get("username"),
        email: date.get("email"),
        password: date.get("password"),
        comfirmPassword: date.get("comfirmPassword"),
    };
    // try {
    //     formSchema.parse(data)
    // } catch (e) {
    //     console.log(e);
    // }

    const result = formSchema.safeParse(data);
    if(!result.success){
        console.log(result.error.flatten);
        return result.error.flatten();
    }
}