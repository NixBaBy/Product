import React from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; // FormProvider нэмсэн
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  address: z
    .string()
    .min(5, "Хамгийн багадаа 5 үсэгтгэй байна")
    .max(50, "Хамгийн ихдээ 50 үсэгтгэй байна"),
  phone: z
    .string()
    .regex(/^\d{8}$/, "Таны оруулсан утга 8 оронтой тоо байх ёстой."),
  username: z
    .string()
    .min(5, "Хамгийн багадаа 5 үсэгтгэй байна")
    .max(50, "Хамгийн ихдээ 50 үсэгтгэй байна"),
});

const MyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Амжилттай захиалга!");
  }

  return (
    <FormProvider {...form}>
      {" "}
      {/* FormProvider ашигласан */}
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Гэрийн хаяг</FormLabel>
                <FormControl>
                  <Input placeholder="Гэрийн хаягаа оруулна уу" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Утасны дугаар</FormLabel>
                <FormControl>
                  <Input placeholder="Утасны дугаар оруулна уу" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Хүлээн авагчийн нэр</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Хүлээн авагчийн нэр оруулна уу"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default MyForm;
