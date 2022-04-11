import React, { useRef, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "./css/Header.css";
import MintNft from "./MintNft";

function Header() {
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="navbars"
      >
        <div className="navbar-container ">
          <a href="#" className="d-flex align-items-center brand-title ">
            <motion.img
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                // damping: 20,
                // mass: 0.3,
              }}
              className="logo"
              src="assets/head2.png"
              alt=""
            />
            <motion.h1
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                // damping: 20,
                // mass: 0.3,
              }}
              className="m-0 logo__title text-black"
            >
              Rage FKERS
            </motion.h1>
          </a>

          {/* //old code */}
          {/* <a href="#" className="brand-title">
            <img
              className="logo"
              src="https://www.doodledogsnft.com/wp-content/uploads/2021/11/doodle-dogs-text-logo-blk-min-1024x199.png"
              alt=""
            />
          </a> */}
          <button
            onClick={(e) => {
              handleNavbarButton(e);
            }}
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div ref={navbarLinks} className="navbar-links menu-collapse">
            <ul className="links-lists m-0">
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",

                  stiffness: 120,

                  // damping: 20,
                  // mass: 0.3,
                }}
                className="nav-items"
              >
                <Link
                  activeClass="is-active"
                  className="nav-links"
                  to="about"
                  spy={true}
                  smooth={true}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <Link
                  activeclassname="is-active"
                  className="nav-links"
                  spy={true}
                  smooth={true}
                  to="team"
                >
                  Team
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <Link
                  activeclassname="is-active"
                  className="nav-links"
                  to="faqs"
                  spy={true}
                  smooth={true}
                >
                  FAQ
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <NavLink
                  activeclassname="is-active"
                  className="nav-links"
                  to="/contact"
                >
                  <i className="bi bi-discord nav__icon" />
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <a href="#" target="_blank">
                  <i className="bi bi-twitter nav__icon" />
                </a>
              </motion.li>

              {/* <div>
                  <Wallet />
                </div> */}
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="container">
        <AllRoutes
          hideMenu={() => {
            hideNavMenu();
          }}
        ></AllRoutes>
      </div>
    </div>
  );
}

function AllRoutes({ hideMenu }) {
  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

function Home() {
  return <h1 className="m-0"></h1>;
}

export default Header;
