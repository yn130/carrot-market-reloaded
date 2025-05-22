"use server"
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import {z} from "zod";

// const passwordRegex = new RegExp(
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).+$/
// );
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
    // .min(3, "Way too short!!")
    // .max(10, "That is too long!!!")
    .toLowerCase() //대문자 자동으로 소문자로 전환
    .trim() //공백 자동으로 제거
    // .transform((username) => username.replace(/ /g, "")), //공백 자동으로 제거
    .transform((username) => `🎾 ${username} 🎾`) // 문자열 앞뒤에 문자열 추가
    // .refine((username) => username.includes("potato") ? false:true,"No potatos allowed!"), 
    // .refine((username) => !username.includes
    .refine(checkUsername,"No potatos allowed!"),
    email: z.string().email().toLowerCase(),
    password: z.string().min(4).regex(PASSWORD_REGEX,PASSWORD_REGEX_ERROR), 
    confirmPassword: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX),
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

    // 유효성 검사
    const result = formSchema.safeParse(data); // safeParse(data): 데이터 유효성 검사를 시도
    if(!result.success){
        console.log(result.error.flatten()); // result.error.flatten()으로 보기 쉬운 오류 메시지를 뽑아서 리턴
        return result.error.flatten();
    } else {
        console.log(result.data);
    }
} 