"use client";
import InputField from "@/components/InputField.component";
import { IInscription } from "@/interface/inscriptions.interface";
import { IUser } from "@/interface/user.interface";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

interface UserListProps {
  users: Promise<IUser[]>;
}

export const UserList = ({ users }: UserListProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [searchName, setSearchName] = useState("");
  const usersContent = use(users);
  const router = useRouter();

  const handingRouter = () => {
    if (searchName.length > 0) {
      router.push(
        `/admin?searchName=${searchName}${
          currentUser ? `&selected=${currentUser.id}` : ""
        }`
      );
    }
    if (currentUser && searchName.length === 0) {
      router.push(`/admin?selected=${currentUser.id}`);
    }

    if(!currentUser) {
      router.push(`/admin`);
    }
  }

  const handleUserClick = (user: IUser) => {
    if (currentUser?.id === user.id) {
      setCurrentUser(null);
      return;
    }
    setCurrentUser(user);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toLowerCase();

    if (name.length === 0) {
      router.push("/admin");
    }
    setSearchName(name);
  };

  useEffect(() => {
    handingRouter();
  }, [searchName, currentUser, router]);

  return (
    <section className="w-full flex flex-col gap-2 bg-white shadow-lg rounded-lg p-4 col-span-2 md:col-span-2 overflow-y-auto">
      <div className="mb-4 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Lista de usuarios
        </h2>
        <InputField
          id="search"
          name="search"
          type="text"
          placeholder="Buscar usuario"
          rightIcon={<Search className="h-5 w-5 text-gray-400" />}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleSearch}
        />
      </div>
      {usersContent.map((user) => (
        <button
          onClick={() => {
            handleUserClick(user);
          }}
          className={"flex items-center gap-2 px-2 py-3 rounded-md" + (currentUser?.id === user.id ? " bg-gray-200" : "")}
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
          <h4 className="text-left">{user.fullName}</h4>
        </button>
      ))}
    </section>
  );
};
