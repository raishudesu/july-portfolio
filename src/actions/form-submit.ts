"use server";

import { FormSchema } from "@/lib/zod";
import { Resend } from "resend";

export const submitForm = async (prevState: any, formData: FormData) => {
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

  const htmlStringTemplate = `<div>
                                <h1>
                                  Form Submission from ${validatedFields.data.firstName} ${validatedFields.data.lastName}
                                </h1>
                                <p>${validatedFields.data.message}</p>
                              </div>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "bacaltosbaryshnikov@gmail.com",
      subject: "Portfolio Form Submission",
      html: htmlStringTemplate,
    });

    if (error) {
      return { message: error };
    }
  } catch (error: any) {
    return {
      message: error.message,
    };
  }

  return {
    message: "Success",
  };
};
