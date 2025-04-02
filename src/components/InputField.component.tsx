import { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function InputField({
  label,
  name,
  leftIcon,
  rightIcon,
  type,
  ...restOfProps
}: InputFieldProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}:
        </label>
      )}
      {leftIcon && (
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-[1.20rem] left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        </div>
      )}
      <input
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        name={name}
        type={type}
        {...restOfProps}
      />
      {rightIcon && (
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute bottom-[1rem] right-0 pr-3 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        </div>
      )}
    </div>
  );
}
