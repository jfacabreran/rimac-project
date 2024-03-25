import IMAGES from "../../assets/images";

const Header = () => {
  return (
    <>
      <div className="loginPage__header">
        <img src={IMAGES.logoRimac} alt="logoRimac" />
        <div>
          <p className="hide__responsive">¡Compra por este medio!</p>
          <div>
            <img src={IMAGES.phone} alt="phone" />
            <p className="loginPage__number-phone">(01) 411 6001</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
