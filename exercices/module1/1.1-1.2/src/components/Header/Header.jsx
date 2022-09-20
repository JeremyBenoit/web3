import logo from "components/Header/logo192.png"

const Header = (props) => {
    return (
        <div>
            <img src={logo} alt=""/>
            <h1>{props.course}</h1>
        </div>
    )
}
export default Header