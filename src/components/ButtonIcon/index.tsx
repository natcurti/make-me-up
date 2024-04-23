import { Button } from "react-bootstrap";
import "./styles.css";

interface IButtonIcon {
  children: React.ReactNode;
  onClick?: () => void;
  isIconOnCart?: boolean;
}

const ButtonIcon = ({
  children,
  onClick,
  isIconOnCart = false,
}: IButtonIcon) => {
  return (
    <Button
      className={`${
        isIconOnCart && "p-0"
      } ${"bg-transparent border-0 btn-icon"}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonIcon;
