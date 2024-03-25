import { useEffect, useState } from "react";
import Header from "../components/common/headerComponent";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router";
import Steps from "../components/plans/stepsComponent";
import ContainerPlanTypes from "../components/plans/containerPlanTypesComponent";
import ContainerCardsPlans from "../components/plans/containerCardsPlansComponent";

const URL = "https://rimac-front-end-challenge.netlify.app/api/plans.json";
const PlansPage = () => {
  const [checked, setChecked] = useState("");
  const [plans, setPlans] = useState([]);
  const { setUserPlan } = useUser();
  const navigation = useNavigate();

  const toggleCheckbox = (id) => {
    setChecked(id);
  };
  const fetchPlansData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPlans(data.list))
      .catch((error) => console.log(error));
  };
  const onPlanSelected = (plan) => {
    setUserPlan(plan);
    navigation("/resumen");
  };

  useEffect(() => {
    if (checked !== "") fetchPlansData();
  }, [checked]);

  return (
    <>
      <Header />
      <Steps />
      <ContainerPlanTypes checked={checked} toggleCheckbox={toggleCheckbox} />
      <ContainerCardsPlans
        checked={checked}
        plans={plans}
        onPlanSelected={onPlanSelected}
      />
    </>
  );
};

export default PlansPage;
