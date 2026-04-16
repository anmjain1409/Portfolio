import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ieqpp5c",
        "template_h93y8ze",
        form.current,
        "zlxDEeVit_KVWiajg"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        {/* FIXED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8 md:pr-8">

            <div className="space-y-8 md:pr-8 text-left">

              <h3 className="text-2xl font-semibold mb-6 text-left">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <a
                      href="mailto:anmoljain79421@gmail.com"
                      className="font-medium text-base hover:text-primary transition"
                    >
                      anmoljain79421@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm text-muted-foreground">Phone</span>
                    <a
                      href="tel:+918770348800"
                      className="font-medium text-base hover:text-primary transition"
                    >
                      +91 8770348800
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium text-base">
                      Hyderabad (T.S)
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Social Links */}
            <div className="pt-8 text-left">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/anmjain14/" target="_blank">
                  <Linkedin className="hover:text-primary transition" />
                </a>
                <a href="https://x.com/anmoljain1409" target="_blank">
                  <Twitter className="hover:text-primary transition" />
                </a>
                <a href="https://github.com/anmjain1409" target="_blank">
                  <Github className="hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <div className="bg-card p-8 rounded-lg shadow-sm w-full">
              <h3 className="text-2xl font-semibold mb-6">
                Send a Message
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border bg-background"
                />

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border bg-background"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md border bg-background resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};