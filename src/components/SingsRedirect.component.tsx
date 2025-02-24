import Link from "next/link";

interface SingRedirectProps {
  redirect: string;
  text: string;
  buttonText: string;
}

export const SingRedirect = ({
  redirect,
  text,
  buttonText,
}: SingRedirectProps) => {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">{text}</span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={redirect}
          className="w-full flex justify-center py-2 px-4 border border-purple-300 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
