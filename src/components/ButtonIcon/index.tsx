import { Button } from "react-bootstrap";
import "./styles.css";

interface IButtonIcon {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonIcon = ({ children, onClick }: IButtonIcon) => {
  return (
    <Button className="bg-transparent border-0 btn-icon" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
