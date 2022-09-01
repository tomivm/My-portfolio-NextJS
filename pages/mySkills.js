import { useState, useRef } from "react";
import Skills from "../components/Skills";
import SkillsDetail from "../components/SkillsDetail";
import NextSectionBtn from "../components/NextSectionBtn";

export default function MySkills() {
  const [showSkills, setShowSkills] = useState(false);
  const skillDetailRef = useRef(null);
  const handleShowSkills = () => {
    const delayToScroll = 2000;
    setShowSkills(true);
    setTimeout(() => {
      skillDetailRef.current.scrollIntoView({ behavior: "smooth" });
    }, delayToScroll);
  };

  return (
    <div className="blueBackground">
      {/* <Head></Head> */}
      <Skills moonClicked={handleShowSkills} />

      {showSkills && (
        <div ref={skillDetailRef}>
          <SkillsDetail />
          <NextSectionBtn text={"My works"} href={"/myWorks"} />
        </div>
      )}
    </div>
  );
}
