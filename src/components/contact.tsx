import { spaceMono } from "@/lib/fonts";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <h2 className={`${spaceMono.className} mt-4 font-medium text-3xl`}>
        Let&lsquo;s connect!
      </h2>
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
