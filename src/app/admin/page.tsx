import { getAllUsers } from "@/service/user/getAllUsers.service";
import { Grid } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
  const users = await getAllUsers();
  return (
    <main className="grid grid-cols-6">
      <div className="col-span-1 ">
      <h1>Estudiantes</h1>

        <ul className="bg-red-500">
          {users.map((user) => (
            <li  key={user.id} >
              <div className="border p-2">{user.img ? 
              user.img :
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Usuario"
              /> }{user.fullName}</div>
            </li>
          ))}
        </ul>

      

      </div>
      <div className="col-span-3">junito</div>
            <Link href="/createCourse">Crear usuario</Link>
    </main>
  );
}
