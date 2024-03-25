import { useEffect, useState } from "react";
import IMAGES from "../../assets/images";

const Footer = () => {
  const [year, setYear] = useState("");

  function getCurrentYear() {
    const fechaActual = new Date();
    return setYear(fechaActual.getFullYear());
  }

  useEffect(() => {
    getCurrentYear();
  }, []);

  return (
    <div className="footer__container">
      <div className="footer__container__info">
        <img className="show__desktop" src={IMAGES.logo} alt="logoRimac" />
        <img
          className="show__responsive"
          src={IMAGES.logoResponsiveFooter}
          alt="LogoResponsive"
        />
        <div className="show__responsive underline"></div>
        <p>© {year} RIMAC Seguros y Reaseguros.</p>
      </div>
    </div>
  );
};

export default Footer;
