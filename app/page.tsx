import { Button } from "antd"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Homepage",
}

export default async function Web() {
  return (
    <div>
      <h1>Hello World!!</h1>
      <Button type="primary">
        <Link href={"/form"}>Form Components</Link>
      </Button>
    </div>
  )
}
