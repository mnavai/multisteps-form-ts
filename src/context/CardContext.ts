import { ReactNode, createContext, useState } from "react";

export interface CardContextProps extends ValueType { children:ReactNode }
export interface ValueType {
    selectCards: string;
    setSelectedCards: React.Dispatch<React.SetStateAction<string>>;
    cardPrice: number;
    setCardPrice: React.Dispatch<React.SetStateAction<number>>;
    toggleSelection: string;
    setToggleSelection: React.Dispatch<React.SetStateAction<string>>;
}
export const CardContext:ValueType = createContext({
    selectCards: "",
    setSelectedCards: () => {},
    cardPrice: 0,
    setCardPrice: () => {},
    toggleSelection: "Monthly",
    setToggleSelection: () => {},
})

export const CardProvider = ({children}: CardContextProps) => {
    const [selectCards, setSelectedCards] = useState<string>("");
    const [cardPrice, setCardPrice] = useState<number>(0);
    const [toggleSelection, setToggleSelection] = useState<string>("mon");

    const value:ValueType = {selectCards, setSelectedCards, cardPrice, setCardPrice, toggleSelection, setToggleSelection};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
 }