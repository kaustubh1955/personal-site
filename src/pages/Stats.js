import React from "react";
import { Link } from "react-router-dom";
import Personal from "../components/Stats/Personal";
import Site from "../components/Stats/Site";
import Main from "../layouts/Main";

const Stats = () => (
  <Main title="Stats" description="Some statistics about Kaustubh Dwivedi">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/stats">Stats</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
