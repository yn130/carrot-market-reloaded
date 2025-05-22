"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string({
        required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
})


export async function login(prevState: any, formdata: FormData) {
    const data = {
        email: formdata.get("email"),
        password: formdata.get("password"),
    }
    const result = formSchema.safeParse(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        console.log(result.data);
    }
}
