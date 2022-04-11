import React from "react";

function Rarity() {
  return (
    <div className="container-fluid text-white  px-0 bg__primary">
      <div className="rarity container h_main d-flex flex-column  align-items-center">
        <h1 className="mb-4 text-white">Rarity</h1>
        <div
          className="col-md-10 px-md-4 py-md-0"
          data-aos="slide-right"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <img
            className="w-100"
            src="https://www.doodledogsnft.com/wp-content/uploads/2021/11/rarity-min_4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Rarity;
