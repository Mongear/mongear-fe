"use client"
import Link from "next/link"
import { ComponentProps, memo, useActionState } from "react"
import { loginAction } from "@/features/auth/actions/login.action"
import { Button } from "@/components/atoms/button"
import { cn } from "@/lib/utils"
import InputWithLabel from "@/components/molecules/input-with-label"

type Props = ComponentProps<"div">;
const LoginForm = ({ className }: Props) => {
  const [state, action, isPending] = useActionState(loginAction, undefined);
  console.log(state);
  return (
    <form action={action} className={cn("", className)}>
      <h2 className="font-semibold text-3xl tracking-wider"> Log in to Mongear </h2>
      <p className="text-md my-6"> Enter your details below</p>
      <InputWithLabel name="email" label="Email" type="text" placeholder="Email" />
      <InputWithLabel name="password" label="Password" type="password" placeholder="Password" />
      <div className="flex justify-between items-center mt-8">
        <Button disabled={isPending} type="submit" className="bg-[#DB4444] text-white px-8 py-6">
          Log In
        </Button>
        <Link href={"/forget-password"} className="text-red-600" >Forget Password ?</Link>
      </div>
    </form>
  )
}

export default memo(LoginForm);
