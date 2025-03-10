"use client"

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
// import { useFormState } from "react-dom";
import { handlerForm } from "./action";
import { useActionState } from "react";

export default function LogIn(){
    const [state, action] = useActionState(handlerForm, null);

    return (
        <div className="flex flex-col gap-10 px-6 py-8">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">HELLO!</h1>
                <h2 className="text-xl">Log in with email and password.</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput name="email" type="email" placeholder="Email" required errors={[]}/>
                <FormInput name="password" type="password" placeholder="Password" required errors={state?.errors ?? []}/>
                <FormButton text="Login"/>
            </form>
            <SocialLogin />
        </div>
    )
}





// ---------------------------------------------------------- //

// Route Handler 사용 

// "use client";

// import FormButton from "@/components/form-btn";
// import FormInput from "@/components/form-input";
// import SocialLogin from "@/components/social-login";

// export default function LogIn(){
//     const onClick = async () => {
//         const response = await fetch("/api/users", {
//             method:"POST",
//             body: JSON.stringify({
//                 username:"yeeun",
//                 password:"1234"
//             })
//         })
//         console.log(await response.json());
//     }

//     return (
//         <div className="flex flex-col gap-10 px-6 py-8">
//             <div className="flex flex-col gap-2 *:font-medium">
//                 <h1 className="text-2xl">HELLO!</h1>
//                 <h2 className="text-xl">Log in with email and password.</h2>
//             </div>
//             <form className="flex flex-col gap-3">
//                 <FormInput type="email" placeholder="Email" required errors={[]}/>
//                 <FormInput type="password" placeholder="Password" required errors={[]}/>
//             </form>
//                <span onClick={onClick}>
//                     <FormButton loading={false} text="Login"/>
//                 </span>
//             <SocialLogin />
//         </div>
//     )
// }