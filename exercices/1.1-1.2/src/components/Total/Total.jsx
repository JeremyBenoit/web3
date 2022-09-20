const Total = (props) => {
    let sum = 0;
    props.exercises.forEach(element => {
        sum += element
    });
    return (
        <p>Number of exercises {sum}</p>
    )
}
export default Total