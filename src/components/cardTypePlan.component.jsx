/* eslint-disable react/prop-types */

const CardTypePlan = ({ id, image, type, description, onChange, checked }) => {
  return (
    <div className={`cardTypePlam__container ${checked ? "active" : ""}`}>
      <label className="radio__container">
        <input type="radio" onChange={() => onChange(id)} name="example" />
        <span className="radio__custom"></span>
      </label>
      <img className="cardTypePlan__image" src={image} alt="tipo de plan" />
      <p className="cardTypePlan__type">{type}</p>
      <p className="cardTypePlan__description">{description}</p>
    </div>
  );
};

export default CardTypePlan;
