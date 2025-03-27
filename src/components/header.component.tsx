"use client";
import { useAppSelector } from "@/hooks/redux.hooks";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <div className="flex items-center">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
            >
              <span>{user.fullName}</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Usuario"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
