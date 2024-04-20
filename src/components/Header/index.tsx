import "./styles.css";
import Message from "./Message";
import NavBarContainer from "./NavBarContainer";
import Account from "./Account";

const Header = () => {
  return (
    <>
      <Message />
      <div className="container-header shadow-sm px-lg-5">
        <header className="header mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <NavBarContainer />
          <Account />
        </header>
      </div>
    </>
  );
};

export default Header;
