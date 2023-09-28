import "./Header.css";
import logo from "./../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="logo_img" src={logo} alt="логотип сайта" />
      </div>
    </header>
  );
};

export default Header;
