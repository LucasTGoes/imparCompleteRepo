import { IPhoto } from "./photo"

export interface ICarResponse {
    cars: Array<ICar>,
    totalCars: number
}

export interface ICar {
    Id: number,
    Name: string,
    Status: string,
    PhotoId: number
    Photo: IPhoto
}

export interface ICreateCard {
    tipo: string,
    car?: ICar
}