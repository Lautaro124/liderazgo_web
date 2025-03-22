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
