import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form, FormControl, FormField, FormItem, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type NewsletterData = {
  email: string;
};

const ContactForm = () => {
  const form = useForm<FormData>();
  const newsletterForm = useForm<NewsletterData>();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const onNewsletterSubmit = async (data: NewsletterData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Newsletter data:", data);
      toast.success("Inscrição realizada com sucesso!");
      newsletterForm.reset();
    } catch (error) {
      toast.error("Erro ao realizar inscrição. Tente novamente.");
    }
  };

  return (
    <section className="py-24 bg-arcadia-dark relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 w-full h-40 bg-gradient-to-b from-black to-transparent opacity-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-arcadia-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Entre em Contato
            <span className="block text-arcadia-primary mt-2 text-3xl">
              Estamos prontos para atender você
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas, solicite um orçamento ou simplesmente nos diga como podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Formulário de Contato */}
          <div className="md:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <fieldset className="grid md:grid-cols-2 gap-6">
                  {["email", "phone"].map((field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as keyof FormData}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                          <Input
                              type={field.name === "email" ? "email" : "text"}
                              placeholder="Email"
                              className="bg-white/10 backdrop-blur-sm border-0 h-14 text-white placeholder:text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </fieldset>

                {["name", "message"].map((field) => (
                  <FormField
                    key={field}
                    control={form.control}
                    name={field as keyof FormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          {field.name === "message" ? (
                            <Textarea
                              placeholder="Mensagem"
                              className="min-h-[150px] bg-white/10 backdrop-blur-sm border-0 text-white placeholder:text-gray-400"
                              {...field}
                            />
                          ) : (
                            <Input
                              placeholder="Nome Completo"
                              className="bg-white/10 backdrop-blur-sm border-0 h-14 text-white placeholder:text-gray-400"
                              {...field}
                            />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}

                <Button
                  type="submit"
                  className="bg-arcadia-primary hover:bg-arcadia-primary/90 text-white px-8 py-6 rounded-full w-40"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Newsletter */}
          <div className="bg-arcadia-primary rounded-3xl p-8 text-white h-fit">
            <h3 className="text-2xl font-bold mb-4">Nossa Newsletter</h3>
            <p className="text-white/80 mb-6">
              Fique por dentro das últimas novidades, dicas e tendências do mundo digital.
            </p>

            <Form {...newsletterForm}>
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                <FormField
                  control={newsletterForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          className="bg-white h-12 border-0 text-gray-700 placeholder:text-gray-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-arcadia-dark hover:bg-arcadia-dark/90 text-white h-12"
                  disabled={newsletterForm.formState.isSubmitting}
                >
                  {newsletterForm.formState.isSubmitting ? "Inscrevendo..." : "Inscrever"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
