import "./Input.css";

const Input = ({ size = "medium", ...props }) => {
  return <input className={`input ${size}`} {...props} />;
};

export default Input;
