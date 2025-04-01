"use client";
import { IUser } from "@/interface/user.interface";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export const UserList = ({ users }: { users: Promise<IUser[]> }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [searchName, setSearchName] = useState("");
  const usersContent = use(users);
  const router = useRouter();

  const handleUserClick = (user: IUser) => {
    if (currentUser?.id === user.id) {
      setCurrentUser(null);
      return;
    }
    setCurrentUser(user);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toLowerCase();

    if(name.length === 0) {
      router.push("/admin");
    }
    setSearchName(name);
  };

  useEffect(() => {
    if (searchName.length > 0) {
      router.push(`/admin?searchName=${searchName}`);
    }
  }, [searchName, router]);

  return (
    <>
      <section className="w-full flex flex-col gap-2 h-full bg-white shadow-lg rounded-lg p-4 col-span-2 md:col-auto">
        <div>
          <label htmlFor="search" className="sr-only">
            Buscar usuario
          </label>
          <input
            type="text"
            id="search"
            placeholder="Buscar usuario"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={handleSearch}
          />
        </div>
        {usersContent.map((user) => (
          <button
            onClick={() => {
              handleUserClick(user);
            }}
            className="flex items-center gap-2 mb-4"
            key={user.id}
          >
            {user.avatar ? (
              <img src={user.avatar} alt="Avatar" />
            ) : (
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Usuario"
              />
            )}
            <h4>{user.fullName}</h4>
          </button>
        ))}
      </section>
      <section className="w-full flex flex-col gap-2 h-full bg-white shadow-lg rounded-lg p-4 col-span-2 md:col-span-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Detalles del usuario
        </h2>
        {currentUser ? (
          <div className="flex flex-col gap-2">
            <p>
              <strong>Nombre:</strong> {currentUser.fullName}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
              <strong>Rol:</strong> {currentUser.role}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">
            Selecciona un usuario para ver los detalles.
          </p>
        )}
      </section>
    </>
  );
};
