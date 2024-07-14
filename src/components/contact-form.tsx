"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { submitForm } from "@/actions/form-submit";
import { FormSchema } from "@/lib/zod";
import { useFormState } from "react-dom";
import { useEffect } from "react";
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

  const initialState = {
    errors: {},
  };

  const [state, formAction] = useFormState(submitForm, initialState);

  useEffect(() => {
    if (state.errors) {
      (["firstName", "lastName", "message"] as const).forEach((key) => {
        if (state.errors[key]) {
          form.setError(key, {
            type: "manual",
            message: state.errors[key][0],
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
  }, [state, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="grid space-y-4">
        <FormInputFields form={form} />
      </form>
    </Form>
  );
};

export default ContactForm;
