import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
