// import { Link } from 'react-router-dom';
// import SignupButton from "../SignupButton/SignupButton";
// import LoginButton from "../LoginButton/LoginButton";
import Button from "../Button/Button";
import styles from "./AuthButtons.module.scss";

const AuthButtons = () => {
  return (
    <div className={styles["auth-button__wrapper"]}>
      <Button linkTo={"/login"} text={"Log In"} variant={"primary"} />
      <Button linkTo={"/signup"} text={"Get Started"} variant={"secondary"} />
    </div>
  );
};

export default AuthButtons;
