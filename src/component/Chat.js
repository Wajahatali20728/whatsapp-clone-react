import React from "react";
import chatImage from "../images/profile1.jpg";
export default function Chat() {
  return (
    <>
      <div className="leftLowerSection">
        <div className="nameArea">
          <div className="imageArea">
            <img
              className="chatImage"
              src={chatImage}
              alt=""
              width="40px"
              height="40px"
            />
          </div>
          <div className="nameAndMessage">
            <div className="itemName">Muhammad Hamza Younas</div>
            <div className="itemMessage">This Message Was Deleted !</div>
          </div>
        </div>
        <div className="timeArea">12/15/2022</div>
      </div>
    </>
  );
}
