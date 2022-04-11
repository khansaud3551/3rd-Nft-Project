import React, { useEffect, useState } from "react";
import "./css/mint.css";
import { motion } from "framer-motion";
import $ from "jquery";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

function MintNft() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0.069);
  const [imageAdress, setImageAdress] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Mint NFTs");
          getAccountBalance(result[0]);
          $(".mint-btn").addClass("button");
          $(".connect-btn").hide();
          $(".mint-btn").removeClass("hidden-btn");
          chainChangedHandler();
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  };

  // listen for account changes

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
      window.ethereum.on("chainChanged", chainChangedHandler);
    }
  }, []);

  //increment decmrent by 0.15
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);

      setAmount(amount + 0.069);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setAmount(amount - 0.069);
    }
  };

  return (
    <div
      className="Mint"
      style={{ backgroundImage: "url(assets/banner3.png)" }}
    >
      <div className="container  ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="row bg_clr "
        >
          <div className="col-md-6">
            {count === 1 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/27.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 2 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/head2.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 3 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/58.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 4 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/1.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 5 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/44.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 6 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/36.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 7 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/5.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 8 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/67.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 9 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/head4.png"
                className="w_img67g"
                alt=""
              />
            ) : count === 10 ? (
              <motion.img
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 140,
                }}
                src="/assets/52.png"
                className="w_img67g"
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            className="col-md-6 bg_con2 b898 pb-3 py-md-5  d-flex flex-column align-items-center justify-content-center "
          >
            <h1 className="text-white">Mint NFT</h1>
            <p className="font-700 primary_color my-0 font-lg">
              <span id="price">{`${amount.toFixed(3)} ETH`}</span>
            </p>
            <div className="input__div col-6 d-flex margin_78 my-2">
              <div className="w-100">
                <input
                  type="number"
                  className="input__style w-100 px-2"
                  placeholder="0"
                  disabled={true}
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>

              <div className="d-flex flex-column justify-content-center ">
                <button className="btn_plus" onClick={increment}>
                  +
                </button>
                <button className="btn_minus" onClick={decrement}>
                  -
                </button>
              </div>
            </div>
            <button
              className="buttons col-md-5 btn my-3 py-2 bg-white my-2"
              onClick={connectWalletHandler}
            >
              {connButtonText}
            </button>

            <p className="primary_color font-lg font-700">
              <span>0000</span> / <span>10021</span>
            </p>
            <Link className="hjs" to="/">
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MintNft;
