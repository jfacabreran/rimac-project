import IMAGES from "../assets/images";
import BtnBack from "../components/btnBack.component";
import Header from "../components/header.component";
import Steps from "../components/steps.component";
import { useUser } from "../contexts/userContext";

const Resumen = () => {
  const { userData, userPlan } = useUser();
  console.log(userPlan);
  return (
    <>
      <Header />
      <Steps />
      <div className="resumenPage">
        <BtnBack url={"/planes"} responsive={"hide__responsive"} />
        <p className="resumenPage_title">Resumen del seguro</p>
        <div className="resumenPage__container">
          <p className="resumenPage__container-sub-title">
            Precios calculados para:
          </p>
          <div className="resumenPage__container__family">
            <img
              className="resumenPage__container-image"
              src={IMAGES.iconFamily}
              alt="family"
            />
            <p className="resumenPage__container-user-name">
              {userData.name + " " + userData.lastName}
            </p>
          </div>
          <div className="resumenPage__under-line"></div>
          <p className="resumenPage__container-title">Responsable de pago</p>
          <div className="resumenPage__container-document">
            <p>
              {userData.tipoDocumento} : {userData.numeroDocumento}
            </p>
            <p>Celular: {userData.telefono}</p>
          </div>
          <p className="resumenPage__container-title">Plan elegido</p>
          <p>{userPlan.planName}</p>
          <p>Costo del Plan: ${userPlan.planPrice} al mes</p>
        </div>
      </div>
    </>
  );
};
export default Resumen;
