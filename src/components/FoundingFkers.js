import React from "react";

function FoundingFkers() {
  return (
    <div
      className="container bg-new border_rad3g pad_32 section_marg"
      data-aos="slide-right"
    >
      <div className="row p-4 py-5 align-items-center">
        <div className="col-md-7 px-md-4 d-flex flex-column justify-content-center">
          <h1 className="text-white">The Founding Fkers 🎃</h1>
          <p className="text-sm mt-3 mb-0">
            Crypto Fkers are made by 2 meme artists together: Brian (Discord:
            Brian.CryptoFker#3741) and JJBB (Discord: JJBB#0881). Brian acts as
            the Chief Creativity Fker who comes up with all different traits
            ideas and sketched drafts. Then JJBB made the drawing with more
            details and fine tunes them. As we believe that the art itself is
            more important than the makers, we choose to remain semi-anonymous.
            But you can always reach us in Discord.
          </p>
        </div>
        <div className="col-md-5 text-white mt-5 mt-md-0">
          <img
            className="w-100 border_rad3g mb-4 mb-md-0"
            src="assets/banner-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FoundingFkers;
