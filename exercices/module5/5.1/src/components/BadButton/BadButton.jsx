import {useContext} from "react";
import {Context as CountersContext} from "contexts/countersContext";

function BadButton() {
    const { increaseBad } = useContext(CountersContext)
    return <button onClick={increaseBad}>increase bad</button>
}

export default BadButton;