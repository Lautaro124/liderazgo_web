interface FormProps {
  children: React.ReactNode;
  onSubmit: (formData: FormData) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form action={onSubmit} className="space-y-6">
      {children}
    </form>
  );
}
