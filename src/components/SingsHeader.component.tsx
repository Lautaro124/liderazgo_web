import { BookOpen } from "lucide-react";

interface SingsHeaderProps {
  title: string;
  subtitle: string;
}

export const SingsHeader = ({ title, subtitle }: SingsHeaderProps) => {
  return (
    <section className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center">
        <div className="rounded-full bg-purple-100 p-3">
          <BookOpen className="h-12 w-12 text-purple-600" />
        </div>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
    </section>
  );
};
