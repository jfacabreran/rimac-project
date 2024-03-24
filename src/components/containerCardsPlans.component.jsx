/* eslint-disable react/prop-types */
import IMAGES from "../assets/images";
import CardPlan from "./cardPlan.component";

// eslint-disable-next-line react/prop-types
const ContainerCardsPlans = ({ planes, age, selectedPlan, checked }) => {
  return (
    <div className="PlanesPage__cards-plans__container">
      {planes?.map((elem, pos) => {
        if (elem.age >= age)
          return (
            <CardPlan
              onclick={selectedPlan}
              key={pos}
              image={IMAGES.iconProAdd}
              checked={checked}
              {...elem}
            />
          );
      })}
    </div>
  );
};

export default ContainerCardsPlans;
