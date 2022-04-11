import React from "react";
import { motion } from "framer-motion";

function Content5() {
  return (
    <motion.div className="container-fluid px-0 bg__blue">
      <div className="container h_main d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 text-left">
            <h2 className="text-left" data-aos="zoom-in-up">
              About Copyrights: CC0 License
            </h2>
            <p className="line" data-aos="fade-right">
              CC0 means that creators waive those interests in their works and
              thereby place them as completely as possible in the public domain,
              so everyone may freely build upon, enhance and reuse the works for
              any purposes without restriction under copyright or. So in short,
              CC0 enables you do whatever you want with your RageFkers.
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
      </div>

      <img
        data-aos="zoom-out-right"
        delay="1000"
        className="w-100 d-flex"
        src="assets/banner3.png"
        alt=""
      />
    </motion.div>
  );
}

export default Content5;
