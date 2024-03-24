import IMAGES from "../assets/images";
import { useUser } from "../contexts/userContext";
import BtnBack from "./btnBack.component";
import CardTypePlan from "./cardTypePlan.component";

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

// eslint-disable-next-line react/prop-types
const ContainerTypePlans = ({ checked, toggleCheckbox }) => {
  const { userData } = useUser();

  return (
    <>
      <div className="PlansPage__container">
        <BtnBack url={"/"} responsive={"hide__responsive"} />
        <h1 className="PlansPage__title">
          {userData?.name} ¿Para quién deseas cotizar?
        </h1>
        <p className="PlansPage__sub-title">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
        <div className="PlanesPage__cards-type-plans__container">
          {DATA.map((elem, pos) => {
            const cardChecked = checked === elem.id;
            return (
              <CardTypePlan
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
export default ContainerTypePlans;
