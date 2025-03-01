export interface IUser {
  fullName: string;
  password: string;
  email: string;
  work: string;
  birthdate: Birthdate;
  role: string;
  course_location: string;
  is_active: boolean;
  paid: boolean;
  next_payment_date: NextPaymentDate;
  current_module: number;
}

export interface Birthdate {
  $date: string;
}

export interface NextPaymentDate {
  $date: string;
}
