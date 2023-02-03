import './Button.css'

const Button = ({variant, children, ...props}) => {
  return (
    <button
      className={`button ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;