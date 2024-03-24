/* eslint-disable react/prop-types */
import { useState } from "react";

const FloatingLabelInput = ({
  label,
  maxLength,
  validateInput,
  inputValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(!isFocused);

  return (
    <div
      className={`floating__label ${isFocused || inputValue ? "focused" : ""}`}
    >
      <input
        maxLength={maxLength}
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => validateInput(e.target.value)}
      />
      <label onClick={handleFocus}>{label}</label>
    </div>
  );
};

export default FloatingLabelInput;
