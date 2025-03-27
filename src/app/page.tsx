"use client";
import Button from "@/components/button.component";
import Form from "@/components/Form.component";
import InputField from "@/components/InputField.component";
import { SingsHeader } from "@/components/SingsHeader.component";
// import { SingRedirect } from "@/components/SingsRedirect.component";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { saveUser } from "@/redux/slice/user.slice";
import { loginAction } from "@/service/authentication/login.service";
import { Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    
    const response = await loginAction({ email, password });
    if (response) {
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      dispatch(saveUser(response));
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (user.fullName !== "") {
      if (user.role === "teacher") {
        route.push("/admin");
      } else {
        route.push("/dashboard");
      }
    }
  }, [user]);

  return (
    <main className="flex flex-col gap-2 justify-center items-center px-4 w-screen h-full">
      <SingsHeader
        title="Bienvenido de nuevo"
        subtitle=" Accede a tu cuenta para continuar aprendiendo"
      />
      <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:bg-white py-8 px-4 sm:shadow-lg sm:rounded-lg sm:px-10">
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Correo"
            name="email"
            placeholder="ejemplo@gmail.com"
            type="email"
            autoComplete="email"
            required
            defaultValue={localStorage.getItem("rememberedEmail") || ""}
            icon={<Mail className="h-5 w-5 text-gray-400" />}
          />
          <InputField
            label="Contraseña"
            placeholder="••••••••"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            icon={<Lock className="h-5 w-5 text-gray-400" />}
          />
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Recordarme
            </label>
          </div>
          <Button type="submit">Iniciar sesion</Button>
        </Form>
        {/* <SingRedirect
          redirect="/singUp/s"
          text="¿No tienes cuenta?"
          buttonText="Crea tu cuenta"
        />- */}
      </section>
    </main>
  );
}
