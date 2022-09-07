import Image from "next/image";
import cardStyle from "./cardItem.module.css";
import ExploreMore from "./ExploreMore";
export default function CardItem({
  title,
  description,
  resources,
  href,
  imageSrc,
  date,
  gitLink,
}) {
  // resources is a prop dat could contain = ["js", "css", "html", "react", "node", "jest", "redux"];
  return (
    <div className={cardStyle.item}>
      <div className={cardStyle.itemImage}>
        <Image
          src={imageSrc}
          alt="JavasScript"
          layout="fixed"
          height={170}
          width={250}
        ></Image>
        <p>{date}</p>
      </div>
      <div className={cardStyle.itemText}>
        <h2>{title}</h2>
        <p>{description}</p>
        {resources?.length > 0 && (
          <div className={cardStyle.resources}>
            {resources.map((resource) => {
              return (
                <div className={cardStyle.resource}>
                  <Image
                    src={`/images/skills/${resource}.png`}
                    alt={resource}
                    layout="fixed"
                    height={40}
                    width={40}
                  ></Image>
                </div>
              );
            })}
          </div>
        )}
        <div className={cardStyle.exploreArrow}>
          {/* <a
            target="_blank"
            href={"https://github.com/tomivm/faatra-web/tree/main/src"}
          >
            <p style={{ color: "white" }}>open repository</p>
            <Image
              src={`/images/projects/github.png`}
              alt={"github repository"}
              layout="fixed"
              height={40}
              width={40}
            />
          </a> */}
          <ExploreMore text={"Open repo"} href={gitLink} />
          <ExploreMore text={"Visit"} href={href} />
        </div>
      </div>
    </div>
  );
}
