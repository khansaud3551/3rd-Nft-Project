import React from "react";

function TeamCard({ name, title, img }) {
  return (
    <div
      className="col-lg-4 col-md-4 col-sm-6 col-12  pb-1 px-md-4  text-center"
      data-aos="flip-left"
      data-aos-duration="1500"
    >
      <div className="px-3 py-3 pb-1 ">
        <img className="img_w4" src={img} alt="" />
        <h3 className="my-0 font_3gd text-white mt-4 text-capitalize ">
          {name}
        </h3>
        <p className="my-1 font_2g  text-center text-capitalize">{title}</p>
        <p className="team_p my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          placeat fuga recusandae explicabo perspiciatis corrupti dolorem
          provident ?
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
