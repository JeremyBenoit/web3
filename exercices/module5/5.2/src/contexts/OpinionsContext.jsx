import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([])

    const addOpinion = (newOpinion) => {
        const newObject = {
            id: uuidv4(),
            title:newOpinion,
            votes:1
        }
        setOpinions(opinions.concat(newObject))
    }

    const incrementOpinion = (id) => {
        setOpinions(opinions.map(opinion => {
            if(opinion.id === id){
                opinion.votes+=1
            }
            return opinion
        }))
    }

    const sortedOpinions = () => {
        return opinions.sort((opinion1,opinion2) => opinion2.votes-opinion1.votes)
    }

    const exposedValue = {
        sortedOpinions, addOpinion, incrementOpinion
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}