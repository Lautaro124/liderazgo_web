export interface ICourse {
  title: string;
  description: string;
  image: string;
  progress: number;
  isPurchased: boolean;
  modules: number;
  lastLesson?: {
    title: string;
    duration: string;
    module: string;
  };
  totalLessons: number;
  completedLessons: number;
}

export interface IModules {
  name: string;
  classes: IClass[];
  price: number;
  isPurchased: boolean;
  description: string;
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
