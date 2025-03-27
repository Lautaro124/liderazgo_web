import { getAllUsers } from "@/service/user/getAllUsers.service";
import Link from "next/link";

export default async function AdminPage() {
  const users = await getAllUsers();
  return (
    <main>
      <h1>Admin Page</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Nombre Completo</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.fullName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link href="/createCourse">Crear usuario</Link>
    </main>
  );
}
