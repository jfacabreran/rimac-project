import { useNavigate } from "react-router";
import IMAGES from "../assets/images";
import BtnBack from "../components/common/btnBackComponent";
import Header from "../components/common/headerComponent";
import Steps from "../components/plans/stepsComponent";
import { useUser } from "../contexts/userContext";
import { useEffect } from "react";

const SummaryPage = () => {
  const { userData, userPlan } = useUser();
  const navigation = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigation("/");
    }
  }, []);
  return (
    <>
      <Header />
      <Steps />
      <div className="summaryPage">
        <BtnBack url={"/planes"} hideBtn={"hide__responsive"} />
        <p className="summaryPage_title">Resumen del seguro</p>
        <div className="summaryPage__container">
          <p className="summaryPage__container-sub-title">
            Precios calculados para:
          </p>
          <div className="summaryPage__container__family">
            <img
              className="summaryPage__container-image"
              src={IMAGES.iconFamily}
              alt="family"
            />
            <p className="summaryPage__container-user-name">
              {userData?.name + " " + userData?.lastName}
            </p>
          </div>
          <div className="summaryPage__under-line"></div>
          <p className="summaryPage__container-title">Responsable de pago</p>
          <div className="summaryPage__container-document">
            <p>
              {userData?.tipoDocumento} : {userData?.numeroDocumento}
            </p>
            <p>Celular: {userData?.telefono}</p>
          </div>
          <p className="summaryPage__container-title">Plan elegido</p>
          <p>{userPlan?.planName}</p>
          <p>Costo del Plan: ${userPlan?.planPrice} al mes</p>
        </div>
      </div>
    </>
  );
};
export default SummaryPage;
