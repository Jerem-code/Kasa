import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../../assets/headerLogo.png';
import "../../styles/header.scss";
import "../../styles/global.scss";

function Header() {
    // State pour gérer le clic sur les liens de navigation (false par défaut au chargement de la page)
    const [hasClicked, setHasClicked] = useState(false);

    return (
        <header className="header">
            <img src={headerLogo} alt="Logo de l'entreprise" />
            <nav className="menu">
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                hasClicked && isActive ? "active" : ""
                            }
                            onClick={() => setHasClicked(true)}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                hasClicked && isActive ? "active" : ""
                            }
                            onClick={() => setHasClicked(true)}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;