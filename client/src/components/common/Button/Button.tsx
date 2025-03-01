import { Link } from "react-router-dom";
import { useTheme } from "../../../context";
import styles from "./Button.module.scss";

type ButtonProps = {
  linkTo?: string;
  text: string;
  variant: "primary" | "secondary";
};

const Button = ({ linkTo, text, variant }: ButtonProps) => {
  const { theme } = useTheme();

  const buttonClass = `${styles["button"]} ${styles[variant]} ${
    theme === "dark" ? styles["dark"] : styles["light"]
  }`;

  return linkTo ? (
    <Link to={linkTo} className={buttonClass}>
      {text}
    </Link>
  ) : (
    <button className={buttonClass}>{text}</button>
  );
};

export default Button;
