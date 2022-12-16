import "../styles/components/button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: props.btnColor }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
