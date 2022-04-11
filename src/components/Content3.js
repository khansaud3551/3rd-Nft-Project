import React from "react";
import { motion } from "framer-motion";

function Content3() {
  return (
    <motion.div className="container-fluid px-0 bg__blue">
      <div className="container h_main d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <img
              className="w-100 anim_check shake-slow shake-constant shake-constant--hover"
              data-aos="zoom-out-right"
              src="assets/head4.png"
              alt=""
            />
          </div>
          <div className="col-md-7 text-right">
            <h2 className="text-right" data-aos="zoom-in-up">
              The Artists
            </h2>
            <p className="line" data-aos="fade-right">
              Rage Fkers genesis collection are made by 2 meme artists together,
              which are Brian (Discord: Brian.BigFker#3741) and JJBB (Discord:
              JJBB#0881). Brian acts as the Lead Creativity Fker who comes up
              with all different traits ideas and sketched drafts. Then JJBB
              made drawing with more details and fine tunes them. As we believe
              that the art itself is more important than the makers, we choose
              to remain semi-anonymous, just like the guy who made the 1st Rage
              Comics.
            </p>
          </div>
        </div>
      </div>
      <marquee direction="right">
        <p>
          The Mint Price: 0.05 ETH/0.08 ETH Whitelist mint price will be 0.05 E.
          Public mint price will be 0.08 E.
        </p>
      </marquee>
    </motion.div>
  );
}

export default Content3;
