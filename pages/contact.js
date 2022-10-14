import { FaGithub, FaLinkedin, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import contactStyles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

export default function Projects() {
  return (
    <div
      className="blueBackground"
      style={{ minHeight: "100%", paddingBottom: 0 }}
    >
      <div className="wrapper">
        <h1 className={contactStyles.title}>Contact</h1>
        <div className={contactStyles.linksContainer}>
          {/* <a
            aria-label="open Github profile"
            href="https://github.com/tomivm"
            target="_blank"
          >
            <FaGithub size={50} />
            <p>Github</p>
          </a> */}
          <a
            aria-label="mail to"
            href="mailto:tomivm98@gmail.com?Subject=I%20saw%20your%20portfolio"
          >
            <IoMdMail size={50} />
            <p>Email</p>
          </a>
          <a
            aria-label="open Linkedin profile"
            href="https://www.linkedin.com/in/tomas-van-morlegan-925732179/"
            target="_blank"
          >
            <FaLinkedin size={50} />
            <p>Linkedin</p>
          </a>
          <a
            aria-label="Whatsapp to"
            href="https://wa.me/5493517724769"
            target="_blank"
          >
            <FaWhatsapp size={50} />
            <p>Whatsapp</p>
          </a>
          <a
            aria-label="Discord to"
            href="https://discord.com/channels/@me/tomivm#2865"
            target="_blank"
          >
            <FaDiscord size={50} />
            <p>Discord</p>
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
