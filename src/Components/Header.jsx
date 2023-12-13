import logo from "../images/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="header__text">
                <p>My balance</p>
                <h1>$921.48</h1>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header