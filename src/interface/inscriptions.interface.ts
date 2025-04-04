import { IUser } from "./user.interface"

export interface IInscription {
  id: number
  user: IUser
  module: InscriptionModule
  course: InscriptionCourse
  date: string
  createdAt: string
  updatedAt: string
}


interface InscriptionModule {
  id: number
  name: string
  description: string
  price: number
}

interface InscriptionCourse {
  id: number
  title: string
  description: string
  previewImage: string
}
