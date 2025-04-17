import { Avatar } from "@/components/avatar.component";
import { IUser } from "@/interface/user.interface";
import { dateFormat } from "@/utils/formatDate.utils";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

interface UserTableProps {
  users: IUser[];
}

export const UserTable = ({ users }: UserTableProps) => {
  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No hay usuarios registrados.</p>
      </div>
    );
  }

  return (
    <table className="w-full border border-gray-300 rounded-md table-auto">
      <thead>
        <tr className="text-sm text-left font-semibold uppercase h-10 border-b">
          <th className="px-4 py-3">Usuario</th>
          <th className="px-4 py-3">Ocupacion</th>
          <th className="px-4 py-3">Rol</th>
          <th className="px-4 py-3">Fecha de nacimiento</th>
          <th className="px-4 py-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="text-sm border-b hover:bg-gray-100">
            <td className="px-4">
              <div className="flex items-center gap-2 py-2">
                <Avatar
                  imageUrl={user.avatar}
                  altText={user.fullName}
                  iconScale={1}
                  padding={2}
                />
                <div className="col-span-5 md:col-span-3 flex flex-col">
                  <h4 className=" text-base font-medium text-black">
                    {user.fullName}
                  </h4>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </div>
            </td>
            <td className="px-4">{user.ocupation}</td>
            <td className="px-4">
              <span className="bg-gray-200 px-2 rounded-md text-black">
                {user.role}
              </span>
            </td>

            <td className="px-4">
              <div className="flex items-center">
                <Calendar className="h-4 text-gray-500" />
                <span className="text-gray-500 text-sm">
                  {dateFormat(user.birthdate)}
                </span>
              </div>
            </td>
            <td className="px-4">
              <Link
                href={`/userDetail?user=${user.id}`}
                className="flex items-center"
              >
                <button className="flex items-center border botder-gray-300 rounded-md py-1 px-2 hover:bg-gray-100 transition duration-200">
                  <User className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-1">Ver</span>
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
