import {useContext} from "react";
import {Context as CountersContext} from "contexts/countersContext";

function OkButton() {
    const { increaseOk } = useContext(CountersContext)
    return <button onClick={increaseOk}>increase ok</button>
}

export default OkButton;