import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="team container-fluid bg__blue px-0 py-md-5">
      <div className="container h_main text-center mt-0 my-md-0 mb-md-0 pt-0 py-md-4">
        <h1>Meet The Team</h1>

        <div className="row g-3 my-0 my-md-5 justify-content-center">
          <TeamCard name="Haider" title="developer" img="assets/1.png" />
          <TeamCard name="Haider" title="Founder" img="assets/2.png" />
          <TeamCard name="Haider" title="developer" img="assets/3.png" />
        </div>
      </div>
    </div>
  );
}

export default Team;
