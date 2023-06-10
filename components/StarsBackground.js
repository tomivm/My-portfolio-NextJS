import StarsBgStyles from "./StarsBackground.module.css";
export default function StarsBackground() {
  return (
    <div className={StarsBgStyles.starsContainer}>
      <div className={StarsBgStyles.stars}></div>
      <div className={StarsBgStyles.stars2}></div>
      <div className={StarsBgStyles.stars3}></div>
    </div>
  );
}
