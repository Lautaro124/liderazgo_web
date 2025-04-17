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
    <div className="relative rounded-md shadow-sm">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}:
        </label>
      )}
      {leftIcon && (
        <div className={`absolute left-0 ${label? 'bottom-[0.85rem]': 'inset-y-3'} pl-3 flex items-center pointer-events-none `}>
          {leftIcon}
        </div>
      )}
      <input
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        name={name}
        type={type}
        {...restOfProps}
      />
      {rightIcon && (
        <div className={`absolute right-0 ${label? 'bottom-[0.85rem]': 'inset-y-3'} flex items-center pointer-events-none `}>
          {rightIcon}
        </div>
      )}
    </div>
  );
}
