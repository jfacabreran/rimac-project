import { useEffect, useState } from "react";
import Header from "../components/header.component";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router";
import Steps from "../components/steps.component";
import ContainerTypePlans from "../components/containerTypePlans.component";
import ContainerCardsPlans from "../components/containerCardsPlans.component";

const PlanesPage = () => {
  const [checked, setChecked] = useState("");
  const [planes, setPlanes] = useState([]);
  const { age, setUserPlan } = useUser();
  const navigation = useNavigate();
  const toggleCheckbox = (id) => {
    setChecked(id);
  };

  const fetchPlansData = () => {
    fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlanes(data.list);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  const selectedPlan = (plan) => {
    setUserPlan(plan);
    navigation("/resumen");
  };
  useEffect(() => {
    console.log(age);
    if (checked !== "") fetchPlansData();
  }, [checked]);

  return (
    <>
      <Header />
      <Steps />
      <ContainerTypePlans checked={checked} toggleCheckbox={toggleCheckbox} />
      <ContainerCardsPlans
        checked={checked}
        planes={planes}
        age={age}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default PlanesPage;
