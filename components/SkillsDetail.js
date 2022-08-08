import Image from "next/image";
import detailStyle from "./SkillsDetail.module.css";

function SkillsDetail() {
  return (
    <div className={`wrapper ${detailStyle.container}`}>
      <h3>I have knowledge and experience in:</h3>
      <div className={detailStyle.skillsContainer}>
        <div className={detailStyle.skill}>
          <p>JavaScript</p>
          <div>
            <Image
              src="/images/skills/js.png"
              alt="JavasScript"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>CSS</p>
          <div>
            <Image
              src="/images/skills/css.png"
              alt="Cascading Style Sheets"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>HTML</p>
          <div>
            <Image
              src="/images/skills/html.png"
              alt="HTML"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>NODE JS</p>
          <div>
            <Image
              src="/images/skills/node.png"
              alt="Node js"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>REACT</p>
          <div>
            <Image
              src="/images/skills/react-logo.png"
              alt="React"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>REDUX</p>
          <div>
            <Image
              src="/images/skills/redux.png"
              alt="Redux"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>GIT</p>
          <div>
            <Image
              src="/images/skills/git.png"
              alt="GIT"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={detailStyle.skill}>
          <p>JEST</p>
          <div>
            <Image
              src="/images/skills/jest.png"
              alt="Jest"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsDetail;
