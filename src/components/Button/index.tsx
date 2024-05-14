import { Button } from "react-bootstrap";
import "./styles.css";

interface IButtonApp {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  btnLogin?: boolean;
  disabled?: boolean;
}

const ButtonApp = ({
  children,
  type,
  onClick,
  disabled = false,
  btnLogin = false,
}: IButtonApp) => {
  const widthBtn = {
    width: btnLogin ? "90%" : "100%",
    marginTop: btnLogin ? "5px" : "",
    marginBottom: btnLogin ? "5px" : "",
  };

  return (
    <Button
      className="btn-app"
      type={type}
      style={widthBtn}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonApp;
