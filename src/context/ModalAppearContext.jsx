import React, { useState } from 'react';

const ModalAppearContext = React.createContext({
    appear: false,
    setAppear: () => {}
});


export const ModalAppearContextProvider = (props) => {
    const [appear, setAppear] = useState(false);
    return (
        <ModalAppearContext.Provider
            value={{appear, setAppear}}
        >
            {props.children}
        </ModalAppearContext.Provider>
    );
}
export default ModalAppearContext