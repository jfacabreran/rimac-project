import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import IMAGES from "../assets/images";
import BtnBack from "./btnBack.component";

const Steps = () => {
  const location = useLocation();
  const [step, setStep] = useState(false);
  useEffect(() => {
    console.log(location.pathname); // Imprime la ruta actual
    // Aquí puedes agregar lógica condicional basada en la ruta
    if (location.pathname.includes("resumen")) {
      setStep(!step);
    }
  }, [location]);
  return (
    <div className="step__container">
      {/* <BtnBack responsive={"show__responsive"} url={"/planes"} /> */}
      <div className="step__container-bar show__responsive">
        <div className="step__container__progress-bar">
          <BtnBack url={-1} />
          <div className="">
            <span>Paso {!step ? "1" : "2"} de 2</span>
            <progress max="100" value={!step ? "50" : "100"} />
          </div>
        </div>
      </div>
      <div
        className={`step__progress hide__responsive ${
          !step ? "step__active" : ""
        }`}
      >
        <div
          className={`step__progress-number  ${
            !step ? "step__active-number" : ""
          }`}
        >
          1
        </div>
        <p>Planes y coberturas</p>
      </div>
      <img
        src={IMAGES.iconLine}
        className="step__progress-separator hide__responsive"
      ></img>
      <div
        className={`step__progress hide__responsive ${
          step ? "step__active" : ""
        }`}
      >
        <div
          className={`step__progress-number  ${
            step ? "step__active-number" : ""
          }`}
        >
          2
        </div>
        <p>Resumen</p>
      </div>
    </div>
  );
};

export default Steps;
