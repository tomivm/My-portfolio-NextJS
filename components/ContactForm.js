import contactFormStyles from "./ContactForm.module.css";

import { useState, useEffect, useRef } from "react";
import { MdDoneAll, MdReportProblem } from "react-icons/md";

function useIsSubmitable(...args) {
  const [isSubmitable, setIsSubmitable] = useState(false);

  useEffect(() => {
    setIsSubmitable(
      args.reduce(
        (previousFieldsNotEmpty, currentField) =>
          previousFieldsNotEmpty && !!currentField,
        true
      )
    );
  }, [args]);

  return isSubmitable;
}

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const isSubmitable = useIsSubmitable(fullname, email, subject, message);

  const scollToSendedState = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendEmail = async () => {
      const data = {
        name: fullname,
        email,
        subject,
        message,
      };
      try {
        setSendingMessage(true);
        setError(false);
        setSubmitted(false);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          setSubmitted(true);
          //   setFullname("");
          //   setEmail("");
          //   setSubject("");
          //   setMessage("");
          return;
        }
        setError(true);
      } catch {
        setError(true);
      }
    };
    await sendEmail();
    setSendingMessage(false);
    scollToSendedState.current.scrollIntoView();
  };
  return (
    <form className={contactFormStyles.emailForm} onSubmit={handleSubmit}>
      <h2>Send me a message</h2>

      <div>
        <label htmlFor="fullname">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="email">
          E-mail<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="subject">
          Subject<span>*</span>
        </label>
        <input
          type="text"
          name="subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="message">
          Message<span>*</span>
        </label>
        <textarea
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button type="submit" disabled={sendingMessage || !isSubmitable}>
          Send email
        </button>
      </div>
      <div ref={scollToSendedState} className={contactFormStyles.succesMessage}>
        {submitted && !sendingMessage && (
          <>
            <MdDoneAll />
            <p>Your email was sended with Succes</p>
          </>
        )}
        {error && !sendingMessage && (
          <>
            <MdReportProblem />
            <p>
              An error ocours sending your email.
              <br />
              Please try again or use your email provider
            </p>
          </>
        )}
      </div>
    </form>
  );
}
