import footerLogo from '../../assets/footerLogo.png';
import "../../styles/global.scss";
import "../Footer/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Logo de l'entreprise" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
