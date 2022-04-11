import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner px-0 container-fluid banner__overlay">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="banner_img"
        src="assets/banner.png"
        alt=""
      />
      <motion.div className="banner_cont d-flex  g_sa flex-column flex-md-row ">
        <motion.button
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 130 }}
          whileHover={{ scale: 1.1 }}
          id="mydiv"
          className="col-md-6 div_style2"
        >
          Buy On Opensea
        </motion.button>
        <Link to={`/mint`} className="col-md-6   ">
          <motion.button
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 130 }}
            whileHover={{ scale: 1.1 }}
            id="mydiv"
            className="w-100 h-100  div_style2"
          >
            Mint Nft
          </motion.button>
        </Link>
      </motion.div>
      <div className="overlay_item"></div>
    </div>
  );
}

export default Banner;
