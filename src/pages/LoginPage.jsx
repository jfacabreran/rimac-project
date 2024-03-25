import { useState } from "react";
import IMAGES from "../assets/images";
import FloatingLabelInput from "../components/common/inputComponent";
import FloatingLabelSelect from "../components/common/selectComponent";
import Footer from "../components/common/footerComponent";
import Header from "../components/common/headerComponent";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/userContext";
import InfoLogin from "../components/login/infoLoginComponent";
import ErrorMessage from "../components/common/errorMessageComponent";
import CustomCheckbox from "../components/common/customCheckboxComponent";
const URL = "https://rimac-front-end-challenge.netlify.app/api/user.json";

const LoginPage = () => {
  const [selectValue, setSelectValue] = useState("");
  const [errorSelectValue, setErrorSelectValue] = useState("");
  const [docType, setDocType] = useState("DNI");
  const [inputValue, setInputValue] = useState("");
  const [errorInputValue, setErrorInputValue] = useState("");
  const [isPrivacidadChecked, setPrivacidadIsChecked] = useState(false);
  const [errorIsPrivacidadChecked, setErrorPrivacidadIsChecked] = useState("");
  const [isComunicacionesChecked, setComunicacionesIsChecked] = useState(false);
  const [errorIsComunicacionesChecked, setErrorComunicacionesIsChecked] =
    useState("");
  const { setUserData } = useUser();
  const navigation = useNavigate();

  const fetchUserData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((userData) => {
        userData["tipoDocumento"] = docType;
        userData["numeroDocumento"] = selectValue;
        userData["telefono"] = inputValue;
        setUserData(userData);
        navigation("/planes");
      })
      .catch((error) => console.log(error.message));
  };

  const handleDocTypeChange = (event) => {
    setDocType(event.target.value);
    setSelectValue("");
  };

  const handleCheckboxPrivacidadChange = () => {
    setPrivacidadIsChecked(!isPrivacidadChecked);
  };
  const handleCheckboxComunicacionesChange = () => {
    setComunicacionesIsChecked(!isComunicacionesChecked);
  };

  const validateNumber = (event, type) => {
    const inputValue = event;
    const regex = /^[0-9\b]+$/;
    if (inputValue === "" || regex.test(inputValue)) {
      if (type === "input") {
        setInputValue(event);
      } else setSelectValue(event);
    }
  };
  const validationForm = () => {
    if (selectValue === "") {
      setErrorSelectValue("Por favor, ingresa tu documento.");
    } else setErrorSelectValue("");
    if (inputValue === "" || inputValue.length < 9) {
      setErrorInputValue("Por favor, completa este campo.");
    } else setErrorInputValue("");
    if (isPrivacidadChecked === false) {
      setErrorPrivacidadIsChecked("Por favor, selecciona este campo.");
    } else setErrorPrivacidadIsChecked("");
    if (isComunicacionesChecked === false) {
      setErrorComunicacionesIsChecked("Por favor, selecciona este campo.");
    } else setErrorComunicacionesIsChecked("");

    if (
      selectValue !== "" &&
      inputValue !== "" &&
      inputValue.length >= 9 &&
      isPrivacidadChecked !== false &&
      isComunicacionesChecked !== false
    ) {
      fetchUserData();
    }
  };

  return (
    <>
      <Header />
      <div className="loginPage__container">
        <div className="loginPage__group-img hide__responsive">
          <img src={IMAGES.imageLogin} alt="grupo" />
        </div>
        <div className="loginPage__info__container">
          <div className="loginPage__info">
            <InfoLogin image={IMAGES.imageLogin} />
            <FloatingLabelSelect
              maxLength={docType === "DNI" ? 8 : 11}
              validate={(e) => validateNumber(e, "select")}
              selectValue={selectValue}
              docType={docType}
              handleChange={handleDocTypeChange}
              label={"Nro. de documento"}
            />
            <ErrorMessage error={errorSelectValue} />
            <FloatingLabelInput
              validateInput={(e) => validateNumber(e, "input")}
              inputValue={inputValue}
              label={"Celular"}
              maxLength={9}
            />
            <ErrorMessage error={errorInputValue} />
            <CustomCheckbox
              text={"Acepto lo Política de Privacidad"}
              checked={isPrivacidadChecked}
              onChange={handleCheckboxPrivacidadChange}
            />
            <ErrorMessage error={errorIsPrivacidadChecked} />
            <CustomCheckbox
              text={"Acepto la Política Comunicaciones Comerciales"}
              checked={isComunicacionesChecked}
              onChange={handleCheckboxComunicacionesChange}
            />
            <ErrorMessage error={errorIsComunicacionesChecked} />
            <a href="#">Aplican Términos y Condiciones.</a>
            <button className="loginPage__btn" onClick={validationForm}>
              Cotiza aquí
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
