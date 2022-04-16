import React, { useEffect, useState } from "react";
import "./css/mint.css";
import { motion } from "framer-motion";
import $ from "jquery";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(
//   "wss://eth-mainnet.alchemyapi.io/v2/ifzyXSjPF_OGffl3dZHF8cqSUCDH0dbR"
// );
const web3 = createAlchemyWeb3(
    "wss://eth-rinkeby.alchemyapi.io/v2/keC7ZRcIgiotApUd960gwire8vcu5YMa"
);

const contractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"superMinter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
// console.log(contractABI);

const contractAddress = "0x879CC2CaF85f7B770b9220cFf7ECa20803Ea37B4";
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

contractInstance.methods.totalSupply().call().then( function(_supply) {
  $('.total-mints').text(_supply);
});

// var mintCost = 5;
// contractInstance.methods.cost().call().then( function(_cost) {
//   mintCost = _cost;
//   console.log("cost is "+mintCost);
// });
// console.log("cost is "+mintCost);


async function mintNFT(amount) {
  await contractInstance.methods.cost().call().then( function(_cost) {
    var mintPrice = $('#price').text()*10**18;
    // console.log("total amount is "+amount);
    // console.log("price is "+mintPrice);
    contractInstance.methods.mint(amount).send({
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      value: ""+(amount*_cost),
    });
  });
}

function _mintNFT() {
  // console.log("num is "+$(".nft-num").val());
  mintNFT($(".nft-num").val());
}

function MintNft() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0);
  const [mintCost, setMintCost] = useState(0.069);
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
          $(".mint-btn").addClass("buttons col-md-5 btn my-3 py-2 bg-white my-2");
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
      params: [{ chainId: "0x4" }],
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
      setAmount(amount + 0);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      var _cost = mintCost;
      setAmount(amount - 0);
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
              <span id="price">{`${amount}`}</span> ETH
            </p>
            <div className="input__div col-6 d-flex margin_78 my-2">
              <div className="w-100">
                <input
                  type="number"
                  className="input__style w-100 px-2 nft-num"
                  placeholder="0"
                  readyonly
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
              className="connect-btn buttons col-md-5 btn my-3 py-2 bg-white my-2"
              onClick={connectWalletHandler}
            >
              {connButtonText}
            </button>
            <button
              className="hidden-btn mint-btn"
              onClick={_mintNFT}
            >
              Mint NFTs
            </button>

            <p className="primary_color font-lg font-700">
              <span className="total-mints">0000</span> / <span>10000</span>
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
