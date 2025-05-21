"use server"
import {z} from "zod";

function checkUsername(username:string){
    return !username.includes("potato");
}
const checkPassword = ({password, confirmPassword}:{password:string, confirmPassword:string}) => {
    return password === confirmPassword;
}

const formSchema = z.object({
    username: z
    .string({
        invalid_type_error: "Username must be a string",
        required_error: "Where is your username?",
    })
    .min(3, "Way too short!!")
    .max(10, "That is too long!!!")
    // .refine((username) => username.includes("potato") ? false:true,"No potatos allowed!"), 
    // .refine((username) => !username.includes
    .refine(checkUsername,"No potatos allowed!"),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
})
.refine(checkPassword, {
    message: "Both Passwords must be the same!",
    path: ["confirmPassword"],
})

export async function createAccount(prevState:any, date:FormData) {

    const data= {
        username: date.get("username"),
        email: date.get("email"),
        password: date.get("password"),
        confirmPassword: date.get("confirmPassword"),
    };
    // try {
    //     formSchema.parse(data)
    // } catch (e) {
    //     console.log(e);
    // }

    const result = formSchema.safeParse(data);
    if(!result.success){
        console.log(result.error.flatten());
        return result.error.flatten();
    }
} 