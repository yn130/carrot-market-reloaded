"use client"
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { createAccount } from "./actions";


export default function CreateAccount(){
    const [state, trigger] = useActionState(createAccount, null)
    return (
        <div className="flex flex-col gap-10 px-6 py-8">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">HELLO!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={trigger} className="flex flex-col gap-3">
                <FormInput name="username" type="text" placeholder="Username" required />
                <FormInput name="email" type="email" placeholder="Email" required />
                <FormInput name="password" type="password" placeholder="Password" required />
                <FormInput name='comfirmPassword' type="password" placeholder="Confirm Password" required />
                <FormButton text="Create Account"/>
            </form>
            <SocialLogin />
        </div>
    )
}