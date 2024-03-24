import IMAGES from "../assets/images";

/* eslint-disable react/prop-types */
const CardPlan = ({ checked, name, price, description, onclick }) => {
  const planPrice = checked === 1 ? price - price * 0.05 : price;
  return (
    <>
      <div className="cardPlan__container">
        {name.includes("Clínica") ? (
          <div className="cardPlan__recommended-plan">Plan recomendado</div>
        ) : (
          ""
        )}
        <div className="cardPlan__info__container">
          <div className="cardPlan__image">
            <p>{name}</p>
            <img
              className="cardTypePlan__image"
              src={
                name.includes("Clínica")
                  ? IMAGES.iconPlanClinic
                  : IMAGES.iconPlanHome
              }
              alt="tipo de plan"
            />
          </div>
          <p className="cardPlan__cost">costo del plan</p>
          {checked === 1 ? (
            <p className="cardPlan__previous-price">$ {price} antes</p>
          ) : (
            <></>
          )}
          <p className="cardPlan__price">$ {planPrice} al mes</p>
        </div>
        <ul className="cardPlan__description">
          {description.map((elem, pos) => {
            return (
              <li className="cardPlan__description-item" key={pos}>
                {elem}
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => onclick({ planPrice: planPrice, planName: name })}
          className="cardPlan__btn"
        >
          Seleccionar Plan
        </button>
      </div>
    </>
  );
};

export default CardPlan;
