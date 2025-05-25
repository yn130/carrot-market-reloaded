"use server"
// npm install validate
// npm i --save-dev @types/validator
import { redirect } from "next/navigation";


import validator  from "validator";
import { z } from "zod";

const phoneSchema = z
    .string()
    .trim()
// .refine(validator.isMobilePhone)
    .refine(phone => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone number"
);

const tokenSchema = z
    .coerce.number()
    .min(100000)
    .max(999999)
    .refine(token => validator.isNumeric(token.toString()),
        "Wrong token"
    );

interface ActionState {
    token: boolean
}
//pervState:ActionState는 page.tsx에서 useActionState의 2번째 인자값인 initialState를 가져옴 
export async function smsLogIn(pervState:ActionState, formData: FormData){ 
    // console.log(typeof formData.get("token"));
    // console.log(typeof tokenSchema.parse(formData.get("token")));

    const phone = formData.get("phone");
    const token = formData.get("token");

    // (page.tsx에서)action이 처음 실행되는거면!폰 번호 입력 가능하게 input 활성화
    if(!pervState.token){
        const result = phoneSchema.safeParse(phone);
        if(!result.success){
            console.log(result.error.flatten());
            return {
                token: false,
                // object형태의 오류를 반환하는게 아니라, 한가지 데이터만 검증하고 해당 오류를 내보냄(phone 번호 데이터)
                error:result.error.flatten(),
            };
        } else {
            return {
                token: true,
            };
        }
    }
    
    // token이 true이면 -> 폰 번호 입력 
    else {
        const result = tokenSchema.safeParse(token);
        if(!result.success){
            console.log(result.error.flatten());
            // token validation 실패 -> 토큰 입력 오류 메시지 반환
            // ture를 반환하는 이유 : false를 반환하면 토큰값을 입력하는 input창이 비활성화 되어버림
            return {
                token: true,
                error:result.error.flatten(),
            };
            // token validation 성공 -> 로그인 처리 -> 리다이렉트 
        } else {
            // 로그인 처리 -> 리다이렉트 
            redirect("/");
        }
    }           
    
    
}