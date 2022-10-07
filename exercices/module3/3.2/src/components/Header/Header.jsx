import logo from "components/Header/logo192.png"

const Header = ({name}) => {
    return (
        <div>
            <img src={logo} alt=""/>
            <h1>{name}</h1>
        </div>
    )
}
export default Header