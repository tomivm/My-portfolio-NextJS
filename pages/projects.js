import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";
import NextSectionBtn from "../components/NextSectionBtn";
export default function Projects() {
  return (
    <Navbar title={"Projects"}>
      <div className="wrapper">
        <CardItem
          title={"Mater Web Page"}
          description={
            "This project was my first Web development project. It is a web page for a special school of my native city. I started it from a free bootstrap template. Now Im not maintaining it and have some news modifications."
          }
          resources={["js", "css", "html"]}
          imageSrc={"/images/projects/mater.png"}
          href={"https://www.escuelaespecialcemater.com.ar"}
          date={"2020"}
          gitLink={"https://github.com/tomivm/Centro-Educativo-Mater"}
        />
        <CardItem
          title={"Cboard App"}
          description={
            "This project is a Augmentative and Alternative Communication APP. It was created by a really important teacher that I hade on my secondary school. I have the oportunity to improove Cboard with some features and bug fixes since 2021. It bring me the oportunity to participate in a real Project."
          }
          resources={["js", "css", "html", "react", "node", "jest", "redux"]}
          imageSrc={"/images/projects/cboard.png"}
          href={"https://app.cboard.io"}
          date={"2021-actuallity"}
          gitLink={"https://github.com/cboard-org"}
        />
        <CardItem
          title={"Cboard API"}
          description={
            "This project is the backend for the Cbaord APP. It was a great opportunity to improve my backend skills. I developed new endpoints, validations and tests"
          }
          resources={["node", "mocha", "swagger"]}
          imageSrc={"/images/projects/cboard-api.png"}
          href={"https://api.app.cboard.io/docs/"}
          date={"2021-actuallity"}
          gitLink={"https://github.com/cboard-org/cboard-api"}
        />
        <CardItem
          title={"FAATRA Web Page"}
          description={
            "This Project is a Page to know FAATRA (an automotive camera). Also, it provides the forms to subscribe to FAATRA courses. My work was to create web sources whit browser native languages from a static design. Also, I designed the mobile view. All page is rendered from objects with data provided by a Django backend"
          }
          resources={["js", "css", "html"]}
          imageSrc={"/images/projects/faatra.png"}
          href={"https://app.cboard.io"}
          date={"2022"}
          gitLink={"https://github.com/tomivm/faatra-web/tree/main/src"}
        />
        <CardItem
          title={"Matías Sambarino Web Page"}
          description={
            "I made some changes on this page like modernizing the gallery, fixing some bugs on align items, and improving the browser compatibility in the future the objective is to design and implement a mobile view. I deploy the changes using Cpanel"
          }
          resources={["js", "css", "html"]}
          imageSrc={"/images/projects/msambarino.png"}
          href={"https://matiassambarino.com/"}
          date={"2022"}
          gitLink={"https://github.com/tomivm/matiassambarino-web"}
        />
        <NextSectionBtn text={"Contact"} href={"/contact"} />
      </div>
    </Navbar>
  );
}
