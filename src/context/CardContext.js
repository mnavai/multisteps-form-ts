import { createContext, useState } from "react";

export const CardContext = createContext({
    selectCards: "",
    setSelectedCards: (a) => {},
    cardPrice: 0,
    setCardPrice: (a) => {},
    toggleSelection: "Monthly",
    setToggleSelection: (a) => {},
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