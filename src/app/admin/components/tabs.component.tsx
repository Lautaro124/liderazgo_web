import Link from "next/link";

export const Tabs = ({ selected }: { selected: string | undefined }) => {
  return (
    <div className="flex justify-center items-center gap-3 bg-gray-300 rounded-md w-fit p-1">
      <Link
        href={"/admin?selected=users"}
        className={`rounded-md p-1 px-2 ${
          selected === "users" ? "bg-white text-black" : "text-gray-600"
        }`}
      >
        <span>Usuarios</span>
      </Link>
      <Link
        href={"/admin?selected=inscriptions"}
        className={`rounded-md py-1 px-2 ${
          selected === "inscriptions" ? "bg-white text-black" : "text-gray-600"
        }`}
      >
        <span>Inscripciones</span>
      </Link>
    </div>
  );
};
