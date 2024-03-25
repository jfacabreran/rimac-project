const CustomCheckbox = ({ checked, onChange, text }) => {
  return (
    <>
      <label className="loginPage__custom-checkbox">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="loginPage__checkmark loginPage__white-arrow"></span>
        {text}
      </label>
    </>
  );
};
export default CustomCheckbox;
