import { Metadata } from "next"
import MyCustomForm from "components/FormComponent"

export const metadata: Metadata = {
  title: "Form Components",
}

export default async function Web() {
  return (
    <div className="mx-auto mt-4 w-10/12 rounded-2xl border-2 border-gray-400 p-4 shadow">
      <MyCustomForm />
    </div>
  )
}
