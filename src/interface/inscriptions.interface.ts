export interface IInscriptionsResponse {
  id: number;
  title: string;
  description: string;
  previewImage: string;
  modules: IModuleWithStatus[];
  isPushed?: boolean;
  enrolledDate?: string;
  progress?: number;
  isFree?: boolean;
  isCompleted?: boolean;
  isInProgress?: boolean;
  isNotStarted?: boolean;
}

export interface IModuleWithStatus {
  id: number;
  name: string;
  description: string;
  price: number;
  isPushed?: boolean; // Propiedad que indica si el usuario está inscrito en este módulo
  enrolledDate?: string;
  progress?: number;
  isFree?: boolean;
  isCompleted?: boolean;
  isInProgress?: boolean;
  isNotStarted?: boolean;
}
