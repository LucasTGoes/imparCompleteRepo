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
    getCarsPaginated: (offset: number, limit: number) => Promise<void>
    createCar: (car: ICar) => Promise<void>
    updateCar: (car: ICar) => Promise<void>
    deleteCar: (id: number) => Promise<void>
    searchCarByName: (name: string, offset: number, limit: number) => Promise<void>
    setCreationCardType: Dispatch<SetStateAction<ICreateCard>>
    creationCardType: ICreateCard
    setIsSearching: Dispatch<SetStateAction<boolean>>
    isSearching: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    isLoading: boolean
    setCurrentPage: Dispatch<SetStateAction<number>>
    currentPage: number
}

const CardContextData = createContext<CardContextData>({} as CardContextData);

export function CardProvider({ children }: CardProps) {

    const [carList, setCarList] = useState<ICarResponse>()
    const [isOpenedCardCreation, setIsOpenedCardCreation] = useState(false)
    const [isOpenedCardDeletion, setIsOpenedCardDeletion] = useState(false)
    const [deletionId, setDeletionId] = useState(null)
    const [creationCardType, setCreationCardType] = useState<ICreateCard>(null)
    const [isSearching, setIsSearching] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const Url = "https://app-lucasgoes-api.azurewebsites.net/api/"
    const limit = 12
    const offset = 0

    async function createCar(car) {
        setIsLoading(true)
        const { data: carResponse } = await httpRequest.post<ICar>(Url + `cars`, car)
        if (carResponse) {
            setIsOpenedCardCreation(false)
            getCarsPaginated(offset, limit)
            setCurrentPage(1)
            setIsLoading(false)
        }
    }

    async function getCarsPaginated(offset, limit) {
        setIsLoading(true)
        const { data: carsResult } = await httpRequest.get<ICarResponse>(Url + `cars?offset=${offset}&limit=${limit}`)
        setCarList(carsResult)
        setIsSearching(false)
        setIsLoading(false)
    }

    async function updateCar(car: ICar) {
        setIsLoading(true)
        const { data: carUpdateResult } = await httpRequest.put<ICar>(Url + `cars`, car)
        if (carUpdateResult) {
            setCurrentPage(1)
            setIsOpenedCardCreation(false)
            getCarsPaginated(offset, limit)
            setIsLoading(false)
        }
    }

    async function deleteCar(id: number) {
        setIsLoading(true)
        const { data: carDeleteResult } = await httpRequest.delete<ICar>(Url + `cars/${id}`)
        if (carDeleteResult) {
            setCurrentPage(1)
            setIsOpenedCardCreation(false)
            getCarsPaginated(offset, limit)
            setIsOpenedCardDeletion(false)
            setIsLoading(false)
        }
    }

    async function searchCarByName(name: string, offset: number, limit: number) {
        setCurrentPage(1)
        const { data: carSearchResult } = await httpRequest.get<ICarResponse>(Url + `cars/search?name=${name}&offset=${offset}&limit=${limit}`)
        setCarList(carSearchResult)
        setIsSearching(true)
        setIsLoading(false)

    }


    return (
        <CardContextData.Provider value={{
            isOpenedCardCreation,
            setIsOpenedCardCreation,
            isOpenedCardDeletion,
            setIsOpenedCardDeletion,
            carList,
            getCarsPaginated,
            createCar,
            updateCar,
            deleteCar,
            searchCarByName,
            setDeletionId,
            deletionId,
            setCreationCardType,
            creationCardType,
            setIsSearching,
            isSearching,
            setIsLoading,
            isLoading,
            setCurrentPage,
            currentPage
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCardContext() {
    const context = useContext(CardContextData);

    return context;
}