import { useEffect, useState } from "react";
import Alien from "./Alien";
import SkillsStyles from "./Skills.module.css";
function Skills() {
  const [showAlien, setShowAlien] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const showAlienMessage = () => {
      const animationDelay = getComputedStyle(document.body).getPropertyValue(
        "--all_presentation_duration"
      ); // #999999
      console.log("css", animationDelay);
      setTimeout(() => {
        setShowMessage(true);
      }, 11000);
    };
    const mainImgClass = `.${SkillsStyles.mainImg}`;
    const moonImg = document.querySelector("#moonImg");
    console.log(mainImgClass);
    const toggle = document.querySelector(mainImgClass);
    moonImg.addEventListener("click", () => {
      toggle.classList.toggle(SkillsStyles.active);
    });
    setShowAlien(true);
    showAlienMessage();
  }, []);

  return (
    <>
      <div
        id="home"
        className={`${SkillsStyles.container} ${SkillsStyles.homeContainer}`}
      >
        <div className={SkillsStyles.logo}>
          <div className={SkillsStyles.mainImg}>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
            <span className={SkillsStyles.circle}></span>
          </div>
          <img
            id="moonImg"
            src="/images/moon.png"
            alt="moon"
            height={835}
            width={835}
          />
        </div>
        {showAlien && (
          <div className={SkillsStyles.skillsAlien}>
            <Alien
              showMessage={showMessage}
              message={"Click The moon to see my skills!"}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Skills;
