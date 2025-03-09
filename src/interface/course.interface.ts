import { IModules } from "./module.interface";

export interface ICourse {
  id: number;
  title: string;
  previewImage: string;
  isPurchased: boolean;
  shortDescription: string;
  modules: IModules[];
}

export interface IFiles {
  name: string;
  type: string;
  size: string;
  url: string;
}

export interface IClass {
  moduleTitle: number;
  title: string;
  videoUrl: string;
  description: string;
  files: IFiles[];
  next?: {
    name: string;
    moduleTitle: string;
  };
  anterior?: {
    name: string;
    moduleTitle: string;
  };
}
