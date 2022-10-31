import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { ICar, ICarResponse, ICreateCard } from "../interfaces/car";
import { httpRequest } from "../providers/axiosProvider/index"

interface CardProps {
    children: ReactNode;
}

interface CardContextData {
    isOpenedCardCreation: boolean
    setIsOpenedCardCreation: Dispatch<SetStateAction<boolean>>
    isOpenedCardDeletion: boolean
    setIsOpenedCardDeletion: Dispatch<SetStateAction<boolean>>
    setDeletionId: Dispatch<SetStateAction<number>>
    deletionId: number
    carList: ICarResponse
    getCarsPaginated: (offset: number) => Promise<void>
    createCard: (car: ICar) => Promise<void>
    updateCar: (car: ICar) => Promise<void>
    deleteCar: (id: number) => Promise<void>
    searchCarByName: (name: string) => Promise<void>
    setCreationCardType: Dispatch<SetStateAction<ICreateCard>>
    creationCardType: ICreateCard


}

const CardContextData = createContext<CardContextData>({} as CardContextData);

export function CardProvider({ children }: CardProps) {

    const [carList, setCarList] = useState<ICarResponse>(
        {
            cars: Array(15).fill(
                {
                    Id: 1,
                    Name: "Celta",
                    Status: "Novo",
                    PhotoId: 1,
                    Photo: {
                        Id: 1,
                        Base64: "teste"
                    }
                }
            ),
            totalCars: 41
        }
    )
    const [isOpenedCardCreation, setIsOpenedCardCreation] = useState(false)
    const [isOpenedCardDeletion, setIsOpenedCardDeletion] = useState(false)
    const [deletionId, setDeletionId] = useState(null)
    const [creationCardType, setCreationCardType] = useState<ICreateCard>(null)
    const Url = "https://localhost:7089/api/"


    useEffect(() => {
        console.log({ deletionId })
    }, [deletionId])


    async function createCard(car) {
        const { data: carResponse } = await httpRequest.post<ICar>(Url + `cars`, car)
    }

    async function getCarsPaginated(offset) {
        const { data: carsResult } = await httpRequest.get<ICarResponse>(Url + `cars?offset=${offset}`)
        setCarList(carsResult)
    }

    async function updateCar(car: ICar) {
        const { data: carUpdateResult } = await httpRequest.put<ICar>(Url + `cars`, car)
    }

    async function deleteCar(id: number) {
        const { data: carDeleteResult } = await httpRequest.delete<ICar>(Url + `cars/${id}`)
    }

    async function searchCarByName(name: string) {
        const { data: carSearchResult } = await httpRequest.get<ICarResponse>(Url + `cars/search?name=${name}`)
        setCarList(carSearchResult)
    }


    return (
        <CardContextData.Provider value={{
            isOpenedCardCreation,
            setIsOpenedCardCreation,
            isOpenedCardDeletion,
            setIsOpenedCardDeletion,
            carList,
            getCarsPaginated,
            createCard,
            updateCar,
            deleteCar,
            searchCarByName,
            setDeletionId,
            deletionId,
            setCreationCardType,
            creationCardType
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCardContext() {
    const context = useContext(CardContextData);

    return context;
}