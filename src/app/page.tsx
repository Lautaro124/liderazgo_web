"use client";
import Button from "@/components/button.component";
import Form from "@/components/Form.component";
import InputField from "@/components/InputField.component";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const handleSubmit = async (formData: FormData) => {
    console.log("Submitted");
    const email = formData.get("email") as string;
    console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = formData.get("password") as string;
    console.log("🚀 ~ handleSubmit ~ password:", password);
    route.push("/home");
  };

  return (
    <main className="flex flex-col gap-2 justify-center items-center px-4 w-screen h-full">
      <h1>Inicio sesion</h1>
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Correo"
          name="email"
          placeholder="Escribe tu correo electronico..."
          type="email"
        />
        <InputField
          label="Contraseña"
          placeholder="Escribe tu contraseña..."
          name="password"
          type="password"
        />
        <Button type="submit">Iniciar sesion</Button>
      </Form>
    </main>
  );
}
