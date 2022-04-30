import React from "react";

function Faqs() {
  return (
    <div className="container-fluid px-0 section_marg">
      <div
        className="faqs container mt-md-0 py-5 py-md-5  px-3 px-md-5 bg-new border_rad3g "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="2000ms"
      >
        <h1 className=" faqs__heading  mb-3 mt-md-0">FAQS</h1>
        <h2>1. What's the mint price?</h2>
        <p>Mint price is 0.05 ETH.</p>

        <h2>2. How many Crypto Fkers in total?</h2>
        <p>here are 10,000 in total and no more will be created.</p>

        <h2>3. Is there a whitelist and how to get whitelisted?</h2>
        <p>
          Yes. Follow our twitter and join Discord. We will give away whitelist
          spots through those 2 channels.
        </p>

        <h2>4. What's the max mint per wallet?</h2>
        <p className="m-0 pb-3">Maximum mint per wallet is 10.</p>

        <h2>5. What copyrights do Crypto Fker owner have?</h2>
        <p className="m-0 pb-3">
          Owners of Crypto Fkers have full commercial copyrights for the Crypto
          Fkers they own.
        </p>

        <h2>6. What are the funds being used for?</h2>
        <p className="m-0 pb-3">
          Funds of sales will be used for future development such as derivative
          Fkers NFTs, Fkers merches, events, games and so on, which will
          ultimately create more value for the community and the brand.
        </p>

        <h2>7. What's the royalties on Opensea?</h2>
        <p className="m-0 pb-3">
          Royalties is set at 7.5%. Royalties will be used for same purpose as
          funds of sales for future development such as derivative Fkers NFTs,
          Fkers merches, events, games and etc.
        </p>

        <h2>8. What's the mission of Crypto Fkers?</h2>
        <p className="m-0 pb-3">
          Our mission is to build a world-renowned web 3 brand and community
          known as Crypto Fkers (or Fkers in short). The value of Fkers is a
          combination of meme culture, modern arts, crypto community and a
          "don't give a fxxk" attitude. If you are into meme, crypto & NFT and
          don't give a fxxk about others do or say, you are welcome to join us.
        </p>
      </div>
    </div>
  );
}

export default Faqs;
