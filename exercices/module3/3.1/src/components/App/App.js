import { useState } from 'react'
import Button from "components/Button/Button";
import Statistics from "components/Statistics/Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" incrementCounter={() => setGood(good+1)}/>
            <Button text="neutral" incrementCounter={() => setNeutral(neutral+1)}/>
            <Button text="bad" incrementCounter={() => setBad(bad+1)}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App