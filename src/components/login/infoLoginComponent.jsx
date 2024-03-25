const InfoLogin = ({ image }) => {
  return (
    <div className="infoLogin__container">
      <div className="section__container-responsive">
        <div>
          <p className="infoLogin__bg-message">Seguro Salud Flexible</p>
          <h1>Creado para ti y tu familia</h1>
        </div>
        <img
          className="loginPage__image__responsive show__responsive"
          src={image}
          alt="grupo"
        />
      </div>
      <p>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>
    </div>
  );
};

export default InfoLogin;
