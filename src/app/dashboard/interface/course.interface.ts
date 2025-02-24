export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  isPurchased: boolean;
  lastLesson?: {
    title: string;
    duration: string;
    module: string;
  };
  totalLessons: number;
  completedLessons: number;
}