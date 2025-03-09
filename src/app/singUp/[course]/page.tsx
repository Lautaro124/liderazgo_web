"use client";
import Button from "@/components/button.component";
import Form from "@/components/Form.component";
import InputField from "@/components/InputField.component";
import { SingsHeader } from "@/components/SingsHeader.component";
import { SingRedirect } from "@/components/SingsRedirect.component";
import { registerUser } from "@/service/authentication/register.service";
import { setStorage } from "@/utils/storage.utils";
import { Briefcase, Calendar, Mail, User, Lock } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function SingUp() {
  const route = useRouter();
  const { course } = useParams<{ course: string }>();

  const handleSubmit = async (formData: FormData) => {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const ocupation = formData.get("work") as string;
    const birthdate = formData.get("birthdate") as string;
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    if (passwordConfirm !== password) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    const response = await registerUser({
      fullName,
      email,
      ocupation,
      birthdate,
      password,
      // course,
    });
    if (response) {
      setStorage("access_token", response.token);
      route.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SingsHeader
        title="Crea tu cuenta"
        subtitle="Únete a nuestra plataforma de aprendizaje"
      />
      <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:bg-white py-8 px-4 sm:shadow-lg sm:rounded-lg sm:px-10">
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Nombre completo"
            name="fullName"
            type="text"
            required
            placeholder="Juan Pérez"
            icon={<User className="h-5 w-5 text-gray-400" />}
          />
          <InputField
            label="Fecha de nacimiento"
            name="birthdate"
            type="date"
            required
            icon={<Calendar className="h-5 w-5 text-gray-400" />}
          />
          <InputField
            label="Oficio"
            name="work"
            type="text"
            required
            placeholder="Estudiante, Profesional, etc."
            icon={<Briefcase className="h-5 w-5 text-gray-400" />}
          />
          <InputField
            label="Correo"
            name="email"
            type="email"
            autoComplete="email"
            icon={<Mail className="h-5 w-5 text-gray-400" />}
            required
            placeholder="ejemplo@gmail.com"
          />
          <InputField
            label="Contraseña"
            name="password"
            type="password"
            icon={<Lock className="h-5 w-5 text-gray-400" />}
            placeholder="••••••••"
            required
          />
          <InputField
            label="Confirmar contraseña"
            name="passwordConfirm"
            type="password"
            icon={<Lock className="h-5 w-5 text-gray-400" />}
            placeholder="••••••••"
            required
          />
          <Button type="submit">Enviar</Button>
        </Form>
        <SingRedirect
          redirect="/"
          text="¿Ya tienes una cuenta?"
          buttonText="Inicia sesión"
        />
      </section>
    </main>
  );
}
