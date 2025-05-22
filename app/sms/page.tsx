import Button from "@/components/btn";
import Input from "@/components/input";
import { useActionState } from "react";
import { smsVerification } from "./action";

export default function SMSLogin() {
const [state, trigger] = useActionState(smsVerification, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <Input
          name="phone"
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}