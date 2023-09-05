import React, { useState } from "react";

const validityObject = {
    name: true,
    street: true,
    city: true,
    postalCode: true
}


const ValidityContext = React.createContext({
    validityObject: validityObject,
    setFormValidity: () => {}
})

export const ValidityContextProvider = (props) => {
    const [formValidity, setFormValidity] = useState(validityObject);
    return (
        <ValidityContext.Provider
            value={{formValidity, setFormValidity}}
        >
            {props.children}
        </ValidityContext.Provider>
    );
}

export default ValidityContext;