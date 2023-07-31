import { useState, createContext } from "react";

export const CheckBoxContext = createContext({
    selectedServices: [], 
    addSelectedService: (a,b,c) => {}
});

export const CheckBoxProvider = ({children}) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const addSelectedService = (service, price) => {
    const existingService = selectedServices.find((selected) => selected.service === service);

    if (existingService) {
    const updatedServices = selectedServices.filter((selected) => selected.service !== service);
        setSelectedServices(updatedServices);
        } else {
        setSelectedServices((prevServices) => [
            ...prevServices,
            {
            service,
            price,
            },
        ]);
        }
    };

    const value = {selectedServices, addSelectedService};

    return <CheckBoxContext.Provider value={value}>{children}</CheckBoxContext.Provider>
}