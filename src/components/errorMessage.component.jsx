// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ error }) => {
  return <>{error && <div style={{ color: "red" }}>{error}</div>}</>;
};

export default ErrorMessage;
