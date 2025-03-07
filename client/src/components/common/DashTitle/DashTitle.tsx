import styles from "./DashTitle.module.scss";

const USER_NAME = "Nick";
const NEXT_RACE = "Ciruit Gilles Villeneuve";
const NEXT_SESSION = "Practice 1";
const COUNTDOWN = "1d 12h 36m";

type Props = {
  // theme: string;
};

const DashTitle = (/**{ theme }: Props*/) => {
  return (
    <div /**data-theme={theme}*/ className={styles["title"]}>
      <h1 className={styles["title__heading"]}>Welcome, {USER_NAME}</h1>
      <div className={styles["container"]}>
        <span className={styles["container__item"]}>
          Next Race: {NEXT_RACE}
        </span>
        <span className={styles["container__item"]}>
          Next Session: {NEXT_SESSION}
        </span>
        <span className={styles["container__item"]}>
          Countdown to Race: {COUNTDOWN}
        </span>
      </div>
    </div>
  );
};

export default DashTitle;
