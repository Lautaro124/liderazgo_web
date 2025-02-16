import { HTMLInputTypeAttribute } from "react";

export interface InputFieldProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function InputField({ label, name, type, placeholder }: InputFieldProps) {
  return (
    <label className="flex flex-col gap-1">
      {label}:
      <input
      className="text-black border rounded-md focus:border-gray-700 py-2 px-4"
      type={type}
      name={name}
      placeholder={placeholder}
      />
    </label>
  );
};
