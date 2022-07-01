import IntroductionStyles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={IntroductionStyles.container}>
      <p className={IntroductionStyles.text}>
        Beetlejuice, Beetlejuice, Beetlejuice! Beetlejuice, Beetlejuice,
      </p>
    </div>
  );
}

export default Introduction;
