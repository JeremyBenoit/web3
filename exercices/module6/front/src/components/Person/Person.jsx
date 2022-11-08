const Person = ({person, onClickHandler}) => {
    return <p>{person.name} {person.number} <button onClick={onClickHandler}>delete</button> </p>
}
export default Person