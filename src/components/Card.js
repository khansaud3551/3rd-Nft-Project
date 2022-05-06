import React from "react";

function Card() {
  return (
    <div className="container-fluid section_marg p-0 banner__image2">
      <img className="w-100 card__img " src="assets/banner2.png" alt="" />
      <div className="banner__layer pl-md-4 col-12 col-sm-10 col-md-10 col-lg-7 row text-white pe-0">
        <h1
          data-aos="zoom-in-left"
          className="w-100 d-flex justify-content-center align-items-center text-center col-12 text-white text670 m-0"
        >
          Fkers Utilities :
        </h1>

        <div className="">
          <ol className="a" data-aos="zoom-in-left">
            <li>Web3 Avatar</li>
            <li>Digital Art Collection</li>
            <li>Pass to Fkers' Exclusive Community and Events</li>
            <li>Access to future Fkers Drops.</li>
            <li>More to come. ‍</li>
          </ol>
        </div>

        <h1
          data-aos="zoom-in-left"
          className="w-100 d-flex justify-content-center align-items-center col-12 text-white text670 m-0"
        >
          Fkers Roadmap :
        </h1>

        <div className=" ">
          <ol className="a" data-aos="zoom-in-left">
            <li>Crypto Fkers Drop</li>
            <li>1st Fkers Derivatives Drop to Holders</li>
            <li>Fkers Apparels Drop to Holders</li>
            <li>A Fkers' Coin (Should we just name it $FKU?)</li>
            <li>And FvF (Fkers versus Fkers) Games</li>
            <li>
              More adventures and possibilities built together by Fkers
              community.
            </li>
          </ol>
        </div>

        {/* <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">50%</h2>
          <p className="px-4 m-0 text676">
            Open up Merch Store to show off your Bro
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">75%</h2>
          <p className="px-4 m-0 text676">
            Rage Fkers drawing competition. Winners will receive ETH, NFTs, and
            more
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <h2 className="m-0 text679">100%</h2>
          <p className="px-4 m-0 text676">
            One lucky Rage Fkers holder will receive an airdropped popular blue
            chip NFT
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
