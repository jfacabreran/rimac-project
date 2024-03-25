const CardPlanType = ({ id, image, type, description, onChange, checked }) => {
  return (
    <div className={`cardPlanType__container ${checked ? "active" : ""}`}>
      <label className="radio__container">
        <input type="radio" onChange={() => onChange(id)} name="PlanType" />
        <span className="radio__custom"></span>
      </label>
      <img className="cardPlanType__image" src={image} alt="tipo de plan" />
      <p className="cardPlanType__type">{type}</p>
      <p className="cardPlanType__description">{description}</p>
    </div>
  );
};

export default CardPlanType;
