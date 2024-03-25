import IMAGES from "../../assets/images";
import { useUser } from "../../contexts/userContext";
import BtnBack from "../common/btnBackComponent";
import CardPlanType from "./cardPlanTypeComponent";

const DATA = [
  {
    type: "Para mí",
    id: 0,
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    image: IMAGES.iconProUser,
  },
  {
    type: "Para alguien más",
    id: 1,
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    image: IMAGES.iconProAdd,
  },
];

const ContainerPlanTypes = ({ checked, toggleCheckbox }) => {
  const { userData } = useUser();

  return (
    <>
      <div className="PlansPage__container">
        <BtnBack url={"/"} hideBtn={"hide__responsive"} />
        <h1 className="PlansPage__title">
          {userData?.name} ¿Para quién deseas cotizar?
        </h1>
        <p className="PlansPage__sub-title">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
        <div className="PlansPage__cards-type-plans__container">
          {DATA.map((elem, pos) => {
            const cardChecked = checked === elem.id;
            return (
              <CardPlanType
                checked={cardChecked}
                onChange={toggleCheckbox}
                key={pos}
                {...elem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ContainerPlanTypes;
