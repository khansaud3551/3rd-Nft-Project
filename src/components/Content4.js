import React from "react";
import { motion } from "framer-motion";

function Content4() {
  return (
    <motion.div className="container-fluid px-0 bg__blue">
      <div className="container h_main d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 text-left">
            <h2 className="text-left" data-aos="zoom-in-up">
              The Collection
            </h2>
            <p className="line" data-aos="fade-right">
              10000 Generative Rage Fkers from millions of possibilities. Each
              one is unique and has different expressions & look. Some are very
              angry and some are just sad or goofy. And some can be angry and
              goofy at same time.
            </p>
            <p>
              The Mint Price: 0.05 ETH/0.08 ETH Whitelist mint price will be
              0.05 E. Public mint price will be 0.08 E.
            </p>
          </div>

          <div className="col-md-5">
            <img
              className="w-100 anim_check  shake-constant shake-chunk "
              data-aos="zoom-out-right"
              src="assets/27.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Content4;
