import { useEffect } from "react";
import Image from "next/image";
import SkillsStyles from "./Skills.module.css";
function Skills() {
  useEffect(() => {
    const mainImgClass = `.${SkillsStyles.mainImg}`;
    const moonImg = document.querySelector("#moonImg");
    console.log(mainImgClass);
    const toggle = document.querySelector(mainImgClass);
    moonImg.addEventListener("click", () => {
      toggle.classList.toggle(SkillsStyles.active);
    });
  }, []);

  return (
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
    </div>
  );
}

export default Skills;
