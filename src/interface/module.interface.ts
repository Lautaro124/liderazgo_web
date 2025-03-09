import { ICourse } from "./course.interface";

export interface IModules {
  id: number;
  name: string;
  description: string;
  price: number;
  // inscriptions: Inscriptions[];
  course: ICourse;
}
