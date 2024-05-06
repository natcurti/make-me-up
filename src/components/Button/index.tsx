import { Button } from "react-bootstrap";
import "./styles.css";

interface IButtonApp {
  children: React.ReactNode;
}

const ButtonApp = ({ children }: IButtonApp) => {
  return <Button className="btn-app">{children}</Button>;
};

export default ButtonApp;
