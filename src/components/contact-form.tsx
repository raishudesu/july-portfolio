"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { submitForm } from "@/actions/form-submit";
import { FormSchema } from "@/lib/zod";
import FormInputFields from "./form-input-fields";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const formData = new FormData();

    console.log(formData);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const result = await submitForm(formData);

    if (result?.errors) {
      (["firstName", "lastName", "message"] as const).forEach((key) => {
        if (result.errors[key]) {
          form.setError(key, {
            type: "manual",
            message: result.errors[key][0],
          });
        }
      });
    } else {
      form.clearErrors();
      form.reset();

      toast("Your message has been sent.", {
        description: "Thanks for hitting me up! 🎉",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-4">
        <FormInputFields form={form} />
      </form>
    </Form>
  );
};

export default ContactForm;
