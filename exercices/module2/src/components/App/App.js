import Button from "components/Button/Button";
import Display from "components/Display/Display";
import {useState} from "react";

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
          onClick={increase}
          text='Plus'
      />
      <Button
          onClick={reset}
          text='Zero'
      />
      <Button
          onClick={decrease}
          text='Minus'
      />
    </div>
  )
}

export default App