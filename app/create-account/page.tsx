"use client"
import Button from "@/components/btn";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";


export default function CreateAccount(){
    const [state, trigger] = useActionState(createAccount, null)
    return (
        <div className="flex flex-col gap-10 px-6 py-8">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">HELLO!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={trigger} className="flex flex-col gap-3">
                <Input name="username" type="text" placeholder="Username" required errors={state?.fieldErrors.username}/>
                <Input name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email}/>
                <Input name="password" type="password" placeholder="Password" required errors={state?.fieldErrors.password} minLength={PASSWORD_MIN_LENGTH} />
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" required errors={state?.fieldErrors.confirmPassword} minLength={4} />
                <Button text="Create Account"/>
            </form>
            <SocialLogin />
        </div>
    )
}