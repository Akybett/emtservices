import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@workspace/api-client-react";
import { getRecaptchaToken } from "@/lib/recaptcha";
import emblem from "@assets/Transparent-icon_1780050423852.png";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  eventDate: z.string().min(1, "Event date is required"),
  eventLocation: z.string().min(2, "Location is required"),
  servicesRequired: z.string().min(10, "Please provide more details about your requirements"),
  website: z.string().max(0, ""),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { mutate: submitContact, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        setIsSubmitted(true);
        setServerError(null);
        setTimeout(() => {
          form.reset();
          setIsSubmitted(false);
        }, 6000);
      },
      onError: (err: unknown) => {
        const message =
          (err as { response?: { data?: { error?: string } } })?.response?.data?.error ??
          "We could not send your enquiry right now. Please email us directly at info@emtservices.uk";
        setServerError(message);
      },
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      eventDate: "",
      eventLocation: "",
      servicesRequired: "",
      website: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setServerError(null);
    const { website: _honeypot, ...payload } = data;
    const recaptchaToken = await getRecaptchaToken("contact_submit");
    submitContact({ data: { ...payload, recaptchaToken } });
  }

  return (
    <section id="contact" className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      {/* Brand emblem watermark */}
      <img
        src={emblem}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-16 -bottom-16 w-80 md:w-[28rem] opacity-[0.04]"
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-white/20 mb-8"></div>

            <p className="text-lg text-white/80 mb-12 max-w-md">
              You will hear back from one of the directors directly — not a sales team. Fill in what you can and we will give you an honest assessment of what your event requires and whether we are the right fit.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:info@emtservices.uk" className="text-xl font-semibold text-white hover:underline">
                    info@emtservices.uk
                  </a>
                  <p className="text-white/70 mt-2">We will get back to you as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-background text-foreground rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold">Enquiry Received</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you. One of the directors will review your requirements and be in touch as soon as possible.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot — hidden from real users, bots fill it in */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input tabIndex={-1} autoComplete="off" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Venue" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="servicesRequired"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Required</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your event and required cover (security, medical, stewarding, fire safety, etc.)"
                            className="min-h-[120px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {serverError && (
                    <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-semibold text-lg"
                    disabled={isPending}
                  >
                    {isPending ? "Sending…" : "Request Cover"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
