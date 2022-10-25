import {Context as OpinionsContext} from "contexts/OpinionsContext.jsx"
import {useContext} from "react";

const OpinionList = () => {
    const { sortedOpinions, incrementOpinion } = useContext(OpinionsContext)
    return <div>
        <ul>
            {sortedOpinions().map(opinion => <li key={opinion.id}>{opinion.title} : {opinion.votes} <button onClick={() => incrementOpinion(opinion.id)}>Vote</button></li>)}
        </ul>
    </div>
}

export default OpinionList