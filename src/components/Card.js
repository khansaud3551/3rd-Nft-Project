import React from "react";

function Card() {
  return (
    <div className="container-fluid p-0 banner__image2">
      <img className="w-100 card__img " src="assets/banner2.png" alt="" />
      <div className="banner__layer pl-md-4 col-12 col-sm-10 col-md-10 col-lg-7 row text-white pe-0">
        <h1
          data-aos="zoom-in-left"
          className="w-100 text-center col-12 text-white text670 m-0"
        >
          Utility:
        </h1>

        <div className="">
          <ul className="a" data-aos="zoom-in-left">
            <li> Web3 Avatar</li>
            <li>Digital Art Collection</li>
            <li>Pass to Fkers' Community</li>
            <li> Access to Surprise Drops.</li>
            <li>Just use your imagination as it's under CC0 license. ‍</li>
          </ul>
        </div>

        <h1
          data-aos="zoom-in-left"
          className="w-100 text-center col-12 text-white text670 m-0"
        >
          MindMap
        </h1>

        <div className=" ">
          <ul className="a" data-aos="zoom-in-left">
            <li>Rage Fkers Drop</li>
            <li>Some Cool Rage Fkers' Derivatives</li>
            <li>Random Rage Fkers Comics</li>
            <li> Maybe a Fker's Dao?</li>
            <li>and some FvF(Fkers versus Fkers) games?</li>
            <li>more adventures and possibilities.</li>
          </ul>
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
