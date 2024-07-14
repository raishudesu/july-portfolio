import { z } from "zod";

export const FormSchema = z.object({
  firstName: z.string({ required_error: "Required" }).min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});
