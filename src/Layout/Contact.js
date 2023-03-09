import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <article className="contact">
      <h2>Contact</h2>
      <p>
        I can be contacted by email{" "}
        <a href="mailto:jeffjeffjeffh@yahoo.com">here</a>.
      </p>
      <p>
        My LinkedIn can be viewed{" "}
        <a
          href="http://www.linkedin.com/in/jeff-harm-b201921b4/"
          target="blank"
        >
          here
        </a>
        .
      </p>
      <p>
        My GitHub can viewed{" "}
        <a href="http://www.github.com/jeffjeffjeffh" target="blank">
          here
        </a>
        .
      </p>
    </article>
  );
}
