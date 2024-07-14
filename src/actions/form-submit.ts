"use server";

import { FormSchema } from "@/lib/zod";

export const submitForm = async (prevState: any, formData: FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const validatedFields = FormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    message: formData.get("message"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields);
  return {
    message: "Success",
  };
};
