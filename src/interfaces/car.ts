import { IPhoto } from "./photo"

export interface ICarResponse {
    cars: Array<ICar>,
    totalCars: number
}

export interface ICar {
    id?: number,
    name: string,
    status: string,
    photoId?: number
    photo: IPhoto
}

export interface ICreateCard {
    tipo: string,
    car?: ICar
}