import {useContext} from "react";
import {Context as CountersContext} from "contexts/countersContext";

function ResetButton() {
    const { resetAll } = useContext(CountersContext)
    return <button onClick={resetAll}>reset scores</button>
}

export default ResetButton;