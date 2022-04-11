import React from "react";
import { motion } from "framer-motion";

function Content1() {
  return (
    <div className="container-fluid about  px-0">
      <div className="container h_main d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              duration: 1,
            }}
            className="col-md-5"
          >
            <img className="w-100 img_vc" src="assets/head2.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              duration: 1,
            }}
            className="col-md-7 text-right"
          >
            <h2 className="text-right">The Origin</h2>
            <p className="line">
              Back in 2008, an anonymous user made the 1st Rage comics with the
              rage face and posted on 4chan. As the name suggests, the Rage
              comics are mostly about circumstances that lead to anger or rage.
              While most "rage faces" are not used to express rage anymore, the
              name has been used due to origins.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
