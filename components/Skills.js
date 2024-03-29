import Image from "next/image";
import { useEffect, useState } from "react";
import Alien from "./Alien";
import SkillsStyles from "./Skills.module.css";
function Skills({ moonClicked }) {
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
      }, 5000); //17000);
    };
    const mainImgClass = `.${SkillsStyles.mainImg}`;

    const moonImg = document.querySelector("#moonImg");
    console.log(mainImgClass);
    const toggle = document.querySelector(mainImgClass);
    moonImg.addEventListener("click", () => {
      const skillsAlienClass = `.${SkillsStyles.skillsAlien}`;
      const alien = document.querySelector(skillsAlienClass);

      toggle.classList.toggle(SkillsStyles.active);
      alien.classList.add(SkillsStyles.fadeOutAlien);
      moonClicked();
    });
    setShowAlien(true);
    showAlienMessage();
  }, []);

  return (
    <div className={SkillsStyles.start}>
      <div
        id="home"
        className={`${SkillsStyles.container} ${SkillsStyles.homeContainer}`}
      >
        {/* <div className="sectionTitle">
          <h1>My Skills</h1>
        </div> */}
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
          <div className={SkillsStyles.moon}>
            <Image
              id="moonImg"
              src="/images/moon.png"
              alt="moon"
              layout="fill"
              // height="835"
              // width="835"
            />
          </div>
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
    </div>
  );
}

export default Skills;
