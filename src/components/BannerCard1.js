import React, { useState } from "react";

function BannerCard1() {
  return (
    <div
      className="about container bg-new border_rad3g pad_32 section_marg "
      data-aos="slide-right"
    >
      <div className="row p-4 align-items-center">
        <div className="col-md-8 text-white ">
          <h1 className="text-white">The Story of Crypto Fckers ✨</h1>
          <p className="text-sm mt-3 ">
            Since 2021, NFT has been booming and broke through into the
            mainstream. In last one year or so, we have seen and collected many
            different NFT projects in different art style. As 2 degen meme
            artists and crypto enthusiasts, we think we should make a meme style
            NFT by ourselves to add more diversity to the NFT community.
          </p>
          <p>
            And it should be fun and somehow goofy as in most memes. Then Crypto
            Fkers came to our mind. Crypto is taken from the Crypto Punks, which
            is one of our favorite NFT and one of the greatest project in NFT
            history. And Fkers is kinda influenced by mfers, which is created by
            Sartoshi in November 2021.
          </p>
          <p>
            Fkers also indicate the attitude that we don't give a fxxk to what
            others say or think about us. The art style is also influenced by
            famous meme Rage Comics, which is one of the most famous meme series
            in the last decade. With this Crypto Fkers collection, we will build
            the most recognized Web 3 NFT brand (owned by community) and one of
            the most popular NFT avatar collections.
          </p>
        </div>
        <div className="col-md-4 my-3 my-md-0">
          <img className="w-100 border_rad3g" src="assets/gif-1.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BannerCard1;
