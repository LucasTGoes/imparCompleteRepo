import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface CardProps {
    children: ReactNode;
}

interface CardContextData {
    isOpenedCardCreation: boolean
    setIsOpenedCardCreation: Dispatch<SetStateAction<boolean>>
}

const CardContextData = createContext<CardContextData>({} as CardContextData);

export function CardContext({ children }: CardProps) {
    const [isOpenedCardCreation, setIsOpenedCardCreation] = useState(false)

    return (
        <CardContextData.Provider value={{
            isOpenedCardCreation,
            setIsOpenedCardCreation
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCard() {
    const context = useContext(CardContextData);

    return context;
}