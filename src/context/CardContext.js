import { createContext, useState } from "react";

export const CardContext = createContext({
    selectCards: "",
    setSelectedCards: () => {},
    cardPrice: 0,
    setCardPrice: () => {},
    toggleSelection: "Monthly",
    setToggleSelection: () => {},
})

export const CardProvider = ({children}) => {
    const [selectCards, setSelectedCards] = useState("");
    const [cardPrice, setCardPrice] = useState(0);
    const [toggleSelection, setToggleSelection] = useState("mon");

    const value = {selectCards, setSelectedCards, cardPrice, setCardPrice, toggleSelection, setToggleSelection};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
 }