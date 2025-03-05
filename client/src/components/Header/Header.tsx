import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../context";
import { useGetThemeColor } from "../../hooks/useGetThemeColor";
import styles from "./Header.module.scss";
import Logo from "../common/Logo/Logo";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import DarkModeToggle from "../common/DarkModeToggle/DarkModeToggle";
import AuthButtons from "../common/AuthButtons/AuthButtons";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuIconColor = useGetThemeColor(theme, "contrast");

  return (
    <header data-theme={theme} className={styles["header"]} role="banner">
      <div className={styles["header__content"]}>
        <button
          className={styles["header__mobileMenu"]}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <FiX cursor={"pointer"} size={24} color={menuIconColor} />
          ) : (
            <FiMenu cursor={"pointer"} size={24} color={menuIconColor} />
          )}
        </button>
        {isMobileMenuOpen && <MobileMenu /* closeMenu={toggleMobileMenu}**/ />}
        <Link to="/" className={styles["header__logo"]} aria-label="Home">
          <Logo />
        </Link>
        <nav
          className={styles["header__nav"]}
          aria-label="Main navigation"
          role="navigation"
        >
          <HeaderNavBar />
        </nav>
        <div className={styles["header__actions"]}>
          <DarkModeToggle aria-label="Toggle dark mode" />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
