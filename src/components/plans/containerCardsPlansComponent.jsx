import IMAGES from "../../assets/images";
import { useUser } from "../../contexts/userContext";
import CardPlan from "./cardPlanComponent";

const ContainerCardsPlans = ({ plans, onPlanSelected, checked }) => {
  const { age } = useUser();
  return (
    <div className="PlansPage__cards-plans__container">
      {plans?.map((plan, pos) => {
        if (plan.age >= age)
          return (
            <CardPlan
              onClick={onPlanSelected}
              key={pos}
              image={IMAGES.iconProAdd}
              checked={checked}
              {...plan}
            />
          );
      })}
    </div>
  );
};

export default ContainerCardsPlans;
