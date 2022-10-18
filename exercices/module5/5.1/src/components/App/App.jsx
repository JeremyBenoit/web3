import {Context as CountersContext} from "contexts/countersContext.jsx";
import {useContext} from "react";
import GoodButton from "components/GoodButton/GoodButton";
import OkButton from "components/OkButton/OkButton";
import BadButton from "components/BadButton/BadButton";
import ResetButton from "components/ResetButton/ResetButton";

function App() {
    const {
        goodCounter,
        okCounter,
        badCounter,
    } = useContext(CountersContext)
    return (
        <div className="App">
            <ul>
                <li>Good : {goodCounter} <GoodButton/></li>
                <li>Ok : {okCounter} <OkButton/></li>
                <li>Bad : {badCounter} <BadButton/></li>
            </ul>
            <ResetButton/>
        </div>
    );
}

export default App;
