const Button = ({addPerson,text}) => {
    const onClickHandler = (e) => {
        e.preventDefault()
        addPerson();
    }
    return <div>
        <button onClick={onClickHandler}>{text}</button>
    </div>
}
export default Button