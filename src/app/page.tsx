'use client'
import registerUer from "@/actions/register.actions";
import Form from "@/components/Form";
import InputField from "@/components/InputField";

export default function Home() {

  const handleSubmit = async(formData: FormData) => {
    console.log("Submitted");
    const name = formData.get('name') as string
    const lastName = formData.get('last name') as string
    const email = formData.get('email') as string
    const work = formData.get('work') as string
    const birthdate = formData.get('birthdate') as string
    const password = formData.get('password') as string
    const passwordConfirm = formData.get('passwordConfirm') as string

    const user = {name, lastName, email, work, birthdate, password}
    
    console.log(user)
    const response = await registerUer(user)

    console.log(response)
  }

  return (
    <main className="flex flex-col gap-2 justify-center items-center px-4 w-screen h-full">
      <h1>Registro</h1>
      <Form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="name" type="text" />
        <InputField label="Apellido" name="last name" type="text" />
        <InputField label="Correo" name="email" type="email" />
        <InputField label="Oficio" name="work" type="text" />
        <InputField label="Fecha de nacimiento" name="birthdate" type="date" />
        <InputField label="Contraseña" name="password" type="password" />
        <InputField
          label="Confirmar contraseña"
          name="passwordConfirm"
          type="password"
        />
        <button type="submit">Enviar</button>
      </Form>
    </main>
  );
}
