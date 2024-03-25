import { useNavigate } from "react-router";
import IMAGES from "../../assets/images";

const BtnBack = ({ url, hideBtn }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`btn__back ${hideBtn}`}
      onClick={() => {
        navigate(url);
      }}
    >
      <img className="btn__icon" src={IMAGES.iconBtnBack} alt="IconBack" />
      <p>Volver</p>
    </div>
  );
};
export default BtnBack;
