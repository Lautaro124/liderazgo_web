interface FormProps {
  children: React.ReactNode;
  onSubmit: (formData: FormData) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form action={onSubmit} className="flex flex-col gap-4 w-full">
      {children}
    </form>
  );
}