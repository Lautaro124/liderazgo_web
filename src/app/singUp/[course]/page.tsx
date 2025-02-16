'use client'
import registerUer from "@/actions/register.actions";
import Button from "@/components/button.component";
import Form from "@/components/Form.component";
import InputField from "@/components/InputField.component";
import { setStorage } from "@/utils/storage.utils";
import { useParams, useRouter } from "next/navigation";

export default function SingUp() {
  const route = useRouter();
  const {course} = useParams<{course: string}>()


  const handleSubmit = async(formData: FormData) => {
    const name = formData.get('name') as string
    const lastName = formData.get('last name') as string
    const email = formData.get('email') as string
    const work = formData.get('work') as string
    const birthdate = formData.get('birthdate') as string
    const password = formData.get('password') as string
    const passwordConfirm = formData.get('passwordConfirm') as string

    if(passwordConfirm !== password) {
      console.log('Las contraseñas no coinciden')
      return
    }
    const user = {name, lastName, email, work, birthdate, password, course}   
    const response = await registerUer(user)
    if(response){
      setStorage('access_token', response.access_token)
      route.push('/home')
    }
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
        <Button type="submit">Enviar</Button>
      </Form>
    </main>
  );
}
