import "./Footer.css";

import arrow from "./../images/Arrow 1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <a className="footer_link" href="#top">
            <img className="footer_img" src={arrow} alt="footer_icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
