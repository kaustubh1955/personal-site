import React from "react";
import { Link } from "react-router-dom";
import ContactIcons from "../components/Contact/ContactIcons";
import EmailLink from "../components/Contact/EmailLink";
import Main from "../layouts/Main";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Kaustubh Dwivedi via email @ kaustubh1955@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
