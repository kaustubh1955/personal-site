import React from "react";
import { Link } from "react-router-dom";
import Courses from "../components/Resume/Courses";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import positions from "../data/resume/positions";
import Main from "../layouts/Main";

const sections = ["Education", "Experience", "Courses"];

const Resume = () => (
  <Main
    title="Resume"
    description="Kaustubh Dwivedi's Resume. Smart India Hackathon winner, Helix Tech, Newzera and Flipkart."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Courses data={courses} />
    </article>
  </Main>
);

export default Resume;
