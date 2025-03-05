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

  const buttonClass = `${styles["button"]} ${styles[variant]}`;

  return linkTo ? (
    <Link to={linkTo} data-theme={theme} className={buttonClass}>
      {text}
    </Link>
  ) : (
    <button data-theme={theme} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
