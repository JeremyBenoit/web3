import { Context as OpinionsContext } from "contexts/OpinionsContext.jsx"
import {useContext} from "react";

const NewOpinionForm = () => {
    const { addOpinion } = useContext(OpinionsContext)
    const formHandler = (e) => {
        e.preventDefault()
        addOpinion(e.target.newOpinion.value)
    }
    return <form onSubmit={formHandler}>
        <input type="text" name="newOpinion"/>
        <input type="submit" value="Add Opinion"/>
    </form>
}

export default NewOpinionForm