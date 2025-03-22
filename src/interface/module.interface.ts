import { IClass } from "./class.inteface";
import { ICourse } from "./course.interface";

export interface IModules {
  id: number;
  name: string;
  description: string;
  price: number;
  classes: IClass[];
  course: ICourse;
}
