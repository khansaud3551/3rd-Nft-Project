import React from "react";

function BannerCard2() {
  return (
    <div
      className="collection container bg-new border_rad3g pad_32 section_marg"
      data-aos="slide-left"
    >
      <div className="row p-4 py-5 align-items-center">
        <div className="col-md-5 text-white ">
          <img
            className="w-100 border_rad3g mb-4 mb-md-0"
            src="assets/s2.png"
            alt=""
          />
        </div>
        <div className="col-md-7 px-md-5 d-flex flex-column justify-content-center">
          <h1 className="text-white">The Crypto Fkers 10000 Collection 🎉</h1>
          <p className="text-sm mt-3 mb-0">
            10000 Crypto Fkers from millions of possibilities. Each one is
            unique and has different expressions & look. Some are very
            outrageous and some are just sad or goofy. Each one has a different
            expressions just like emojis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerCard2;
