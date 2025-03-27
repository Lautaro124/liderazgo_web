import { BookOpen } from "lucide-react";
import Image from "next/image";

interface SingsHeaderProps {
  title: string;
  subtitle: string;
}

export const SingsHeader = ({ title, subtitle }: SingsHeaderProps) => {
  return (
    <section className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center">
        <div className="rounded-full  p-3">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </div>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
    </section>
  );
};
