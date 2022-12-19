import React from "react";
import "../Styles/Main.css";
export default function Message({ text, type }) {
  return (
    <div className="messageContainer">
      {type === "send" ? (
        <div className="hey">
          <div>{text}</div>
          <div className="time">
            <div>1:23 PM</div>
          </div>
        </div>
      ) : (
        <div className="recieve">
          <div>{text}</div>
          <div className=" reciveTime">
            <div>1:23 PM</div>
          </div>
        </div>
      )}
    </div>
  );
}
