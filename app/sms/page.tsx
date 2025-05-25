"use client"

import Button from "@/components/btn";
import Input from "@/components/input";
import { useActionState } from "react";
import { smsLogIn} from "./action";


// 초기 상태 선언
const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  // 초기 상태 선언 : action.ts에서 선언한 initialState를 가져옴(token 값)
const [state, trigger] = useActionState(smsLogIn, initialState);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        {state.token? (
        <Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
          min={100000}
          max={999999}
        />
      ): (
        <Input
        name="phone"
        type="text"
        placeholder="Phone number"
        required
        errors={state.error?.formErrors}
      />
      )}
        <Button text={state.token? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}