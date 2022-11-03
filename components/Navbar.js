import NavbarStyles from "./Navbar.module.css";

function Navbar({ children, title }) {
  return (
    <div className={NavbarStyles.allScreen}>
      <div className={NavbarStyles.navbar}>
          <h1>{title}</h1>
      </div>
      <div className={NavbarStyles.childrenContainer}>{children}</div>
    </div>
  );
}

export default Navbar;
