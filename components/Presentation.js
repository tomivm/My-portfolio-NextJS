import Image from "next/image";
import Link from "next/link";
import Alien from "./Alien";
import presentationStyles from "./Presentation.module.css";

function Presentation(props) {
  const ToSkilssBtn = () => (
    <div className={presentationStyles.toSkillsContainer}>
      <div className={presentationStyles.buttonToSkills}>
        <Link href="/mySkills">
          <a>
            <div className={presentationStyles.button}>
              <span>My Skills</span>
            </div>
            <div className={presentationStyles.moonToSkills}></div>
          </a>
        </Link>
      </div>
    </div>
  );

  const { init, setProfileImageLoaded } = props;
  return (
    <div className={init ? presentationStyles.start : ""}>
      {/* REFACTOR THIS CAUSES elevated z index on siblings*/}
      <div className={presentationStyles.playBtn}>
        <div id={presentationStyles.role}>
          <div className={presentationStyles.preRole}>I'M </div>FRONT END
          DEVELOPER
        </div>
      </div>

      {/* landscapeNight --> */}
      <div className={`${presentationStyles.landscapeNight}`}>
        <div className={presentationStyles.presentationAlien}>
          <Alien />
        </div>

        <div id={presentationStyles.aboutText} className="wrapper">
          <h1>About me</h1>
          <p>
            Enthusiast Web Developer. Especially interested in JavaScript and
            CSS.
            <br /> Always learning and enjoying teamwork. Actually working and
            collaborating on an Augmentative and Alternative Communication App
            based on React. 
          </p>
        </div>
        <ToSkilssBtn />
      </div>

      {/* <!-- BACGROUND FROM  https://codepen.io/pehaa/pen/yLVeLNg--> */}
      <div className={presentationStyles.landscape}>
        <div className={presentationStyles.mountain}></div>
        <div
          className={`${presentationStyles.mountain} ${presentationStyles.mountain2}`}
        ></div>
        <div
          className={`${presentationStyles.mountain} ${presentationStyles.mountain3}`}
        ></div>
        <div
          className={`${presentationStyles.sunContainer} ${presentationStyles.sunContainer1}`}
        ></div>
        <div className={presentationStyles.sunContainer}>
          <div className={presentationStyles.sun}>
            <Image
              src="/images/tomivm.jpeg"
              layout="fill"
              onLoadingComplete={setProfileImageLoaded}
            />
          </div>
          <div className={presentationStyles.titleContainer}>
            {/* <!-- <h1>TOMÁS</h1>
            <h1>VAN MORLEGAN</h1> --> */}
            <h1 className={presentationStyles.name}>Hello! My name is</h1>
            <h1>
              <span className={presentationStyles.lastName}>
                TOMÁS VAN MORLEGAN
              </span>
            </h1>
          </div>
        </div>
        <div className={presentationStyles.cloud}></div>
        <div
          className={`${presentationStyles.cloud} ${
            presentationStyles.cloud - 1
          }`}
        ></div>
        <div
          className={`${presentationStyles.sunContainer} ${presentationStyles.sunContainerReflection1}`}
        >
          <div className={presentationStyles.sun}></div>
        </div>
        <div className={presentationStyles.light}></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light1}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light2}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light3}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light4}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light5}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light6}`}
        ></div>
        <div
          className={`${presentationStyles.light} ${presentationStyles.light7}`}
        ></div>
        <div className={presentationStyles.water}></div>
        <div className={presentationStyles.splash}></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.delay1}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.delay2}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splash4} ${presentationStyles.delay2}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splash4} ${presentationStyles.delay3}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splash4} ${presentationStyles.delay4}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splashstone} ${presentationStyles.delay3}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splashstone} ${presentationStyles.splash4}`}
        ></div>
        <div
          className={`${presentationStyles.splash} ${presentationStyles.splashstone} ${presentationStyles.splash5}`}
        ></div>
        <div
          className={`${presentationStyles.lotus} ${presentationStyles.lotus1}`}
        ></div>
        <div
          className={`${presentationStyles.lotus} ${presentationStyles.lotus2}`}
        ></div>
        <div
          className={`${presentationStyles.lotus} ${presentationStyles.lotus3}`}
        ></div>
        <div className={presentationStyles.front}>
          <div className={presentationStyles.stone}></div>
          <div className={presentationStyles.grass}></div>
          <div
            className={`${presentationStyles.grass} ${presentationStyles.grass1}`}
          ></div>
          <div
            className={`${presentationStyles.grass} ${presentationStyles.grass2}`}
          ></div>
          <div className={presentationStyles.reed}></div>
          <div
            className={`${presentationStyles.reed} ${presentationStyles.reed1}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
