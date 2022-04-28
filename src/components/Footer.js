import React from "react";

function Footer() {
  return (
    <>
      <h2 className="text-center mb-1 px-2 px-md-0">
        Let's Fxxking Go! Fkers!
      </h2>
      <div className="d-flex justify-content-center " style={{ gap: "20px" }}>
        <a
          href="https://twitter.com/CryptoFkers"
          target="_blank"
          className="size_7"
        >
          <i className="bi bi-twitter size_7" />
        </a>
        <a
          href="https://discord.gg/yPdUgrSfvF"
          target="_blank"
          className="size_7"
        >
          <i className="bi bi-discord size_7" />
        </a>
      </div>

      <div className="container-fluid bg-new text-center ">
        <div className="py-4">
          Copyright © Crypto Fkers. Created by Fker Labs. Few rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
