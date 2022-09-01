import presentationStyles from "./NextSectionBtn.module.css";
import Link from "next/link";
const NextSectionBtn = (props) => (
  <div className={presentationStyles.nextSectionContainer}>
    <div className={presentationStyles.buttonnextSection}>
      <Link href={props.href}>
        <a>
          <div className={presentationStyles.button}>
            <span>{props.text}</span>
          </div>
          <div className={presentationStyles.moonnextSection}></div>
        </a>
      </Link>
    </div>
  </div>
);

export default NextSectionBtn;
