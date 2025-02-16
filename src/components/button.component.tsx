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
      className="bg-violet-900 py-2 px-4 rounded-md text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
