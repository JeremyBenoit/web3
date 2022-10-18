import React, { useState } from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [goodCounter, setGoodCounter] = useState(0)
    const [okCounter, setOkCounter] = useState(0)
    const [badCounter, setBadCounter] = useState(0)

    const increaseGood = () => {
        setGoodCounter(goodCounter+1)
    }
    const increaseOk = () => {
        setOkCounter(okCounter+1)
    }
    const increaseBad = () => {
        setBadCounter(badCounter+1)
    }
    const resetAll = () => {
        setGoodCounter(0)
        setOkCounter(0)
        setBadCounter(0)
    }

    const exposedValue = {
        goodCounter, increaseGood,
        okCounter, increaseOk,
        badCounter, increaseBad,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}