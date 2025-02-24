import { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

export default function InputField({
  label,
  name,
  icon,
  type,
  ...restOfProps
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}:</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-[1.20rem] left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      </div>
      <input
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        name={name}
        type={type}
        {...restOfProps}
      />
    </div>
  );
}
