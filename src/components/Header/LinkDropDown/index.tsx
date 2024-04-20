import { Link } from "react-router-dom";
import "./styles.css";

interface ILinkDropDown {
  children: React.ReactNode;
  to: string;
  type: string;
}

const LinkDropDown = ({ children, to, type }: ILinkDropDown) => {
  let styleLink = "";
  if (type === "new-account") {
    styleLink = "link-new-account";
  } else if (type === "account") {
    styleLink = "link-account";
  } else {
    styleLink = "link-dropdown";
  }

  return (
    <Link to={to} className={`focus-ring ${styleLink}`}>
      {children}
    </Link>
  );
};

export default LinkDropDown;
