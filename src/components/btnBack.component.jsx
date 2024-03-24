import { useNavigate } from "react-router";
import IMAGES from "../assets/images";

// eslint-disable-next-line react/prop-types
const BtnBack = ({ url, responsive }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`btn__back ${responsive}`}
      onClick={() => {
        navigate(url);
        console.log(url);
      }}
    >
      <img className="btn__icon" src={IMAGES.iconBtnBack} alt="tipo de plan" />
      <p>Volver</p>
    </div>
  );
};
export default BtnBack;
