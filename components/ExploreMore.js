import exploreMoreStyle from "./ExploreMore.module.css";
export default function ExploreMore({ text, href }) {
  return (
    <div class={exploreMoreStyle.container}>
      <ul className={exploreMoreStyle.list}>
        <li>
          <a class={exploreMoreStyle.animatedArrow} target="_blank" href={href}>
            <span
              class={`${exploreMoreStyle.theArrow} ${exploreMoreStyle.left}`}
            >
              <span class={exploreMoreStyle.shaft}></span>
            </span>
            <span class={exploreMoreStyle.main}>
              <span class={exploreMoreStyle.text}>{text}</span>
              <span
                class={`${exploreMoreStyle.theArrow} ${exploreMoreStyle.right}`}
              >
                <span class={exploreMoreStyle.shaft}></span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
