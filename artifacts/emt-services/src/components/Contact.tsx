import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, CheckCircle2 } from "lucide-react";
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

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  eventDate: z.string().min(1, "Event date is required"),
  eventLocation: z.string().min(2, "Location is required"),
  servicesRequired: z.string().min(10, "Please provide more details about your requirements"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      eventDate: "",
      eventLocation: "",
      servicesRequired: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 5000);
  }

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-white/20 mb-8"></div>
            
            <p className="text-lg text-white/80 mb-12 max-w-md">
              Discuss your event requirements with our operational planning team. We provide tailored safety solutions grounded in 35 years of UK industry experience.
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
                  <p className="text-white/70 mt-2">We respond to all enquiries within one working day.</p>
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
                  Thank you. Our planning team will review your requirements and be in touch within one working day.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                          <Input type="email" placeholder="john@example.com" {...field} />
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
                            placeholder="Describe your event and required cover (security, medical, stewarding, etc.)" 
                            className="min-h-[120px] resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full font-semibold text-lg">
                    speed button
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
