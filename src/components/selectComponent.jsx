/* eslint-disable react/prop-types */
import { useState } from "react";

const FloatingLabelSelect = ({
  label,
  selectValue,
  validate,
  maxLength,
  handleChange,
  docType,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(!isFocused);

  return (
    <>
      <div className="floating__select__label__container">
        <select
          name="docType"
          id="docType"
          value={docType}
          onChange={handleChange}
        >
          <option value="DNI">DNI</option>
          <option value="RUC">RUC</option>
        </select>
        <div
          className={`floating__select__label ${
            isFocused || selectValue ? "focused" : ""
          }`}
        >
          <input
            maxLength={maxLength}
            type="text"
            value={selectValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => validate(e.target.value)}
          />
          <label onClick={handleFocus}>{label}</label>
        </div>
      </div>
    </>
  );
};

export default FloatingLabelSelect;
