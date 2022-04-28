import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="team container-fluid bg__blue px-0  section_marg">
      <div className="container bg-new border_rad3g pad_32 section_marg py-5">
        <h1 className="text-center px-1 p-md-0">The Founding Fickers 🎃</h1>

        <div className="row g-3 my-0  justify-content-center">
          <TeamCard name="Haider" title="developer" img="assets/1.png" />
          <TeamCard name="Haider" title="Founder" img="assets/2.png" />
          <TeamCard name="Haider" title="developer" img="assets/3.png" />
        </div>
      </div>
    </div>
  );
}

export default Team;
