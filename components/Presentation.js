import Image from "next/image";
import SkillsStyles from "./Skills.module.css";
function Presentation() {
  return (
    <>
      <div id="play_btn">
        <div id="role">
          <div className="pre-role">I'M </div>FRONT END DEVELOPER
        </div>
      </div>

      {/* landscape-night --> */}
      <div className="landscape-night"></div>

      {/* <!-- BACGROUND FROM  https://codepen.io/pehaa/pen/yLVeLNg--> */}
      <div className="landscape">
        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <div className="sun"></div>
          <div className="title-container">
            {/* <!-- <h1>TOMÁS</h1>
            <h1>VAN MORLEGAN</h1> --> */}
            <h1 className="name">Hello! My name is</h1>
            <h1>
              <span className="last-name">TOMÁS VAN MORLEGAN</span>
            </h1>
          </div>
        </div>
        <div className="cloud"></div>
        <div className="cloud cloud-1"></div>
        <div className="sun-container sun-container-reflection">
          <div className="sun"></div>
        </div>
        <div className="light"></div>
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
        <div className="light light-6"></div>
        <div className="light light-7"></div>
        <div className="water"></div>
        <div className="splash"></div>
        <div className="splash delay-1"></div>
        <div className="splash delay-2"></div>
        <div className="splash splash-4 delay-2"></div>
        <div className="splash splash-4 delay-3"></div>
        <div className="splash splash-4 delay-4"></div>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
        <div className="lotus lotus-1"></div>
        <div className="lotus lotus-2"></div>
        <div className="lotus lotus-3"></div>
        <div className="front">
          <div className="stone"></div>
          <div className="grass"></div>
          <div className="grass grass-1"></div>
          <div className="grass grass-2"></div>
          <div className="reed"></div>
          <div className="reed reed-1"></div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
