import logo from "../Assets/Logo .svg";
import Nav from "./Nav";

function Header () {
    return (
        <header className="header">
        <img src={logo} alt="Little lemon logo" />
        <Nav />
        </header>
    );
}

export default Header; 