import { searchUser } from "@/service/user/searchUser.service";
import { SearchUserInput } from "./components/searchUser.component";
import { Tabs } from "./components/tabs.component";
import { Avatar } from "@/components/avatar.component";
import {
  Calendar,
  User,
  BookOpen,
  GraduationCap,
  Users,
  Library,
} from "lucide-react";
import Link from "next/link";
import { UserTable } from "./components/userTable.component";

type SearchParams = Promise<
  { searchName: string; selected: string } | undefined
>;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchName = (await searchParams)?.searchName;
  const selected = (await searchParams)?.selected;
  const users = await searchUser(searchName);


  return (
    <main className="container mx-auto py-6 px-4">
      <section className="flex gap-4 items-center justify-between mb-4">
        <h1 className="font-bold text-2xl">Panel de Administración</h1>
        <SearchUserInput selected={selected} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 rounded-full p-3 mr-3">
            <Users className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Usuarios</h3>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 rounded-full p-3 mr-3">
            <BookOpen className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Cursos</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 rounded-full p-3 mr-3">
            <Library className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Módulos</h3>
            <p className="text-2xl font-bold">42</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 rounded-full p-3 mr-3">
            <GraduationCap className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Estudiantes Activos</h3>
            <p className="text-2xl font-bold">98</p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-4">
        <Tabs selected={selected} />
        <UserTable users={users} />
      </section>
    </main>
  );
}
