"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "antd"
import { SubmitHandler, useForm } from "react-hook-form"
import * as zod from "zod"
import CustomTextInput from "components/FormInputs/CustomInput"
import CustomInputNumber from "components/FormInputs/CustomInputNumber"
import CustomSingleSelect from "components/FormInputs/CustomSingleSelect"

const customValidationSchema = zod.object({
  name: zod.string({ required_error: "Field required" }).min(1, { message: "Add Field" }),
  age: zod
    .number({ required_error: "Field required" })
    .min(1, { message: "Invalid Field" })
    .max(100, { message: "Invalid Field" }),
  role: zod.string({ required_error: "Role is required" }).min(1, { message: "Role is required" }),
  // email: zod.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
  // email_confirmation: zod
  //   .string({ required_error: "Email confirmation is required" })
  //   .email({ message: "Invalid email address" }),
})
// .refine((fildsData) => fildsData.email === fildsData.email_confirmation, {
//   message: "Emails don't match",
//   path: ["email_confirmation"],
// })

export default function MyCustomForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(customValidationSchema),
    defaultValues: {
      name: "",
      age: 0,
      role: "",
    },
  })
  const onSubmit: SubmitHandler<zod.infer<typeof customValidationSchema>> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextInput name="name" control={control} label="Add your name" />
      <CustomInputNumber name="age" control={control} label="Add your age" />
      <CustomSingleSelect
        name="role"
        control={control}
        label="Role"
        options={[
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
        ]}
      />
      <Button type="primary" size="large" htmlType="submit">
        Submit
      </Button>
    </form>
  )
}
