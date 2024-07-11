import ContactForm from "./contact-form";
import { Badge } from "./ui/badge";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-start">
          <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
            <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
            <span className="text-zinc-500">Contact Me</span>
          </Badge>
        </div>
      </div>
      <h2 className="mt-4 font-medium text-3xl">Hit me up!</h2>
      <p className="mt-4 font-mono tracking-tight">
        👨‍💻 Are you interested in working with me? Kindly contact me using the
        form or my links below.
      </p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
