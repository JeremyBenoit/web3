import {useContext} from "react";
import {Context as CountersContext} from "../../contexts/countersContext";

function GoodButton() {
    const { increaseGood } = useContext(CountersContext)
    return <button onClick={increaseGood}>increase good</button>
}

export default GoodButton;