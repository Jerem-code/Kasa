import headerLogo from '../../assets/headerLogo.png';
import "../../styles/header.scss";


function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="Logo de l'entreprise" />
        </header>
    );
}

export default Header;