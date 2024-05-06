import { Button } from "react-bootstrap";
import "./styles.css";

interface IButtonApp {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const ButtonApp = ({ children, type }: IButtonApp) => {
  return (
    <Button className="btn-app" type={type}>
      {children}
    </Button>
  );
};

export default ButtonApp;
