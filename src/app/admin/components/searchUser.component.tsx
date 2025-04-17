"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export const SearchUserInput = ({selected}: {selected: string | undefined}) => {
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if(searchValue.length === 0) {
      router.push(`/admin?selected=${selected}`);
      return;
    }
    router.push(`/admin?selected=${selected}&searchName=${searchValue}`);
  };

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <input
        type="search"
        placeholder="Buscar usuarios..."
        className="pl-8 h-9 w-full md:w-64"
        onChange={handleSearch}
      />
    </div>
  );
};
