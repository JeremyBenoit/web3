import StatisticLine from "components/StatisticLine/StatisticLine";

const Statistics = ({good,neutral,bad}) => {
    const total = good+neutral+bad
    if(total===0) return <p>No feedback given</p>
    return(
        <table>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={total}/>
            <StatisticLine text="average" value={(good-bad)/(total)}/>
            <StatisticLine text="positive" value={(good/(total)*100)}/>
        </table>
    )
}
export default Statistics