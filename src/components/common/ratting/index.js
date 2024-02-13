import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Stars = ({ num }) => {
  let arr = new Array(num).fill("").map((_, i) => i + 1);
  let arrEmpty = new Array(5).fill("").map((_, i) => i + 1);
  if (num === 0) {
    return (
      <>
        <div className="stars-parrent">
          {arrEmpty?.map((e, i) => (
            <AiOutlineStar className="starts-child" key={i} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="stars-parrent">
      {arr?.map((e, i) => (
        <AiFillStar className="starts-child" key={i} />
      ))}
    </div>
  );
};
export default Stars;
