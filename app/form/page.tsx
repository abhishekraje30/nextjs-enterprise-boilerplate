"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "antd"
import { SubmitHandler, useForm } from "react-hook-form"
import * as zod from "zod"
import CustomCheckBoxGroup from "components/FormInputs/CustomCheckBoxGroup"
import CustomTextInput from "components/FormInputs/CustomInput"
import CustomInputNumber from "components/FormInputs/CustomInputNumber"
import CustomMultiSelect from "components/FormInputs/CustomMultiSelect"
import CustomRadioSelect from "components/FormInputs/CustomRadioSelect"
import CustomSingleSelect from "components/FormInputs/CustomSingleSelect"

const customValidationSchema = zod.object({
  name: zod.string(),
  age: zod.number(),
  role: zod.string(),
  roles: zod.array(zod.string()),
  radioInput: zod.string(),
  checkboxInput: zod.array(zod.string()),
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
      roles: [],
      radioInput: "",
      checkboxInput: [],
    },
  })
  const onSubmit: SubmitHandler<zod.infer<typeof customValidationSchema>> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextInput name="name" control={control} label="Add your name" />
        <CustomInputNumber name="age" control={control} label="Add your age" />
        <CustomSingleSelect
          name="role"
          control={control}
          label="Role"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
        <CustomMultiSelect
          name="roles"
          control={control}
          label="Roles"
          options={[
            {
              label: "China",
              value: "China",
            },
            {
              label: "USA",
              value: "USA",
            },
            {
              label: "Japan",
              value: "Japan",
            },
            {
              label: "Korea",
              value: "Korea",
            },
          ]}
        />
        <CustomRadioSelect
          name="radioInput"
          control={control}
          label="Countries"
          options={[
            {
              label: "Asia",
              value: "Asia",
            },
            {
              label: "America",
              value: "America",
            },
            {
              label: "Europe",
              value: "Europe",
            },
            {
              label: "Australia",
              value: "Australia",
            },
          ]}
        />
        <CustomCheckBoxGroup
          name="checkboxInput"
          control={control}
          label="Continents"
          options={[
            { label: "Apple", value: "Apple" },
            { label: "Pear", value: "Pear" },
            { label: "Orange", value: "Orange", disabled: true },
          ]}
        />
        <Button type="primary" size="large" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
