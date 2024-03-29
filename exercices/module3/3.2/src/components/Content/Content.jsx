import Part from "components/Part/Part";

const Content = ({parts}) => {
    return(
        <div>
            {parts.map(part => <Part name={part.name} exercises={part.exercises}/>)}
        </div>
    )
}
export default Content