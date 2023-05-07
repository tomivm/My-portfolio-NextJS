import NavbarStyles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar({ children, title, transparentBackground = false }) {

  const navbarClasNames= !transparentBackground ? NavbarStyles.navbar : `${NavbarStyles.navbar} ${NavbarStyles.transparentBackground}`
  return (
    <div className={NavbarStyles.allScreen}>
      <div className={navbarClasNames}>
        <nav
          id="nav"
          className={`${NavbarStyles.nav} ${NavbarStyles.container}`}
        >
          {/* <h2 className={NavbarStyles.logo}>Tomivm</h2> */}
          <div className={NavbarStyles.closedLogo}></div>
          <h1 className={NavbarStyles.title}>{title}</h1>
          <ul className={NavbarStyles.links}>
            <h2 className={NavbarStyles.logo}>Tomás Van Morlegan</h2>
            <li className={NavbarStyles.item}>
              <Link href={"/"}>
                <a className={NavbarStyles.link}>About</a>
              </Link>
            </li>

            <li className={NavbarStyles.item}>
              <Link href={"/mySkills"}>
                <a className={NavbarStyles.link}>Skills</a>
              </Link>
            </li>

            <li className={NavbarStyles.item}>
              <Link href={"/projects"}>
                <a className={NavbarStyles.link}>Projects</a>
              </Link>
            </li>

            <li className={NavbarStyles.item}>
              <Link href={"/contact"}>
                <a className={NavbarStyles.link}>Contact</a>
              </Link>
            </li>
          </ul>
          <a href="#nav" className={NavbarStyles.hamburguer}>
            <div className={NavbarStyles.icon}>
              <Image
                src="/images/menu/menu.svg"
                alt="open menu"
                layout="responsive"
                width={30}
                height={30}
                className={NavbarStyles.icon}
              />
            </div>
          </a>

          <a href="#" className={NavbarStyles.close}>
            <div className={NavbarStyles.icon}>
              <Image
                src="/images/menu/close.svg"
                alt="close menu"
                layout="responsive"
                width={30}
                height={30}
              />
            </div>
          </a>
        </nav>
      </div>
      <div className={NavbarStyles.childrenContainer}>{children}</div>
    </div>
  );
}

export default Navbar;
