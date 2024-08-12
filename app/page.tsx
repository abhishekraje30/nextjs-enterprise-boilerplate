import { Metadata } from "next"
import { auth } from "auth"
import SignIn from "components/sign-in"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
}

export default async function Web() {
  return (
    <div>
      <h1>Hello World!!</h1>
    </div>
  )
}
