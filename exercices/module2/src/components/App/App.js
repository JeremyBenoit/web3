import Button from "components/Button/Button";
import Display from "components/Display/Display";
import {useState} from "react";

const App = () => {
    const defaultCounter = JSON.parse(localStorage.getItem("counter")) ?? 0
    const [counter, setCounter] = useState(defaultCounter)

    const changeCount = async (delta) => {
        setCounter(counter + delta)
        localStorage.setItem('counter', JSON.stringify(counter+delta))
    }

    return (
        <div>
            <Display counter={counter}/>
            <Button
                changeCount={changeCount}
                text={'Plus'}
                delta={+1}
            />
            <Button
                changeCount={changeCount}
                text={'Zero'}
                delta={-counter}
            />
            <Button
                changeCount={changeCount}
                text={'Minus'}
                delta={-1}
            />
        </div>
    )
}

export default App