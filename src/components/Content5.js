import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Content5() {
  return (
    <div className="container-fluid px-0 bg__blue section_marg ">
      {/* <div className="container h_main d-flex align-items-center bg-new border_rad3g px-3 px-md-0">
        <div className="row d-flex align-items-center ">
          <div className="col-md-7 text-left pl-md-5">
            <h2
              className="text-left"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              Our Mission 🏆
            </h2>
            <p className="line" data-aos="fade-right">
              <ol>
                <li>Create a Fxxking Awesome Crypto & NFT community.</li>
                <li>
                  Make Fkers a Superb Web3 Brand in Metaverse as well as in Real
                  Life.
                </li>
              </ol>
            </p>
          </div>

          <div className="col-md-5">
            <img
              className="w-100 anim_check  shake-constant shake-chunk "
              data-aos="zoom-out-right"
              src="assets/44.png"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <img
        data-aos="zoom-out-right"
        delay="1000"
        className="w-100 d-flex img_5b"
        src="assets/banner3.png"
        alt=""
      />
    </div>
  );
}

export default Content5;
