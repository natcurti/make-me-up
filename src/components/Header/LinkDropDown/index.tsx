import { Link } from "react-router-dom";
import "./styles.css";

interface ILinkDropDown {
  children: React.ReactNode;
  to: string;
  type: string;
  onClick?: () => void;
}

const LinkDropDown = ({ children, to, type, onClick }: ILinkDropDown) => {
  let styleLink = "";
  if (type === "new-account") {
    styleLink = "link-new-account";
  } else if (type === "account") {
    styleLink = "link-account";
  } else {
    styleLink = "link-dropdown";
  }

  return (
    <Link to={to} className={`focus-ring ${styleLink}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LinkDropDown;
