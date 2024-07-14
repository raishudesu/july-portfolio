import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { UseFormReturn } from "react-hook-form";
import { Loader } from "lucide-react";
const FormInputFields = ({
  form,
}: {
  form: UseFormReturn<
    {
      firstName: string;
      message: string;
      lastName: string;
    },
    any,
    undefined
  >;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your first name"
                className="bg-muted"
                disabled={pending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your last name"
                className="bg-muted"
                disabled={pending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Your message goes here"
                rows={6}
                className="bg-muted"
                disabled={pending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        type="submit"
        className="md:self-start flex gap-2"
        disabled={pending}
      >
        {pending && <Loader size={20} className="animate-spin" />}
        Submit
      </Button>
    </>
  );
};

export default FormInputFields;
