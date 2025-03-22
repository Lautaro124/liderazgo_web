import { IFiles } from "./course.interface";

export interface IClass {
  id: number
  title: string
  shortDescription: string
  description: string
  videoUrl: string
  files?: IFiles[];
  next?: {
    name: string;
    moduleTitle: string;
  };
  anterior?: {
    name: string;
    moduleTitle: string;
  };
}
