import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import SkillsDetail from "../components/SkillsDetail";

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
    <Navbar title={"My Skills"}>
      <div className="blueBackground">
        {/* <Head></Head> */}
        <Skills moonClicked={handleShowSkills} />

        {showSkills && (
          <div style={{ height: "100%" }} ref={skillDetailRef}>
            <SkillsDetail />
          </div>
        )}
      </div>
    </Navbar>
  );
}
