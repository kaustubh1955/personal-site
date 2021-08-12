import React from "react";
import { Link } from "react-router-dom";
import me from "../../images/me.png";
import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={me} alt="photo" />
      </Link>
      <header>
        <h2>Kaustubh Dwivedi</h2>
        <p>
          <a href="mailto:kaustubh1955@gmail.com">kaustubh1955@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Kaustubh. I like building things. I am a student at{" "}
        <a href="https://www.bits-pilani.ac.in//">BITS Pilani</a>. My major
        interestes lie in the domain of Software Development, Deep Learning and
        Blockchain technology, and I am always open to Learning new stuff.
        Previously, I have interned at{" "}
        <a href="https://flipkart.com">Flipkart</a>,{" "}
        <a href="https://newzera.com">Newzera</a>, and{" "}
        <a href="https://www.helixtech.co/">Helix Tech</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Kaustubh Dwivedi <Link to="/">kaustubhdwivedi.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
