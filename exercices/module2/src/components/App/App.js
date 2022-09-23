import Button from "components/Button/Button";
import Display from "components/Display/Display";
import {useLocalStorage} from "hooks/useLocalStorage";

const App = () => {
    const [counter, setCounter] = useLocalStorage('counter',0)

    const changeCount = async (delta) => setCounter(counter + delta)

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