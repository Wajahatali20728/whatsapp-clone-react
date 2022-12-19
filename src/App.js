import "./App.css";
import Chat from "./component/Chat";
import "./Styles/Main.css";
import chatImage2 from "./images/profile2.jpg";
import people from "./images/contactPeople.png";
import status from "./images/status.png";
import dots from "./images/dots.png";
import message from "./images/message.png";
import attach from "./images/attach.png";
import search from "./images/search.png";
import burger from "./images/burger.png";
import micro from "./images/micro.png";
import chatImage from "./images/profile1.jpg";
import smiley from "./images/smiley.jpg";
import Message from "./component/Message";
function App() {
  return (
    <>
      <div className="container">
        <div className="headContainer">
          <div className="leftContainer">
            <div className="upperSection">
              <div className="profileImage">
                <img
                  className="chatImageRound"
                  src={chatImage2}
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="profileLogos">
                <img src={people} alt="" width="30px" height="30px" />
                <img src={status} alt="" width="30px" height="30px" />
                <img src={dots} alt="" width="30px" height="30px" />
                <img src={message} alt="" width="30px" height="30px" />
              </div>
            </div>
            <div className="searchBar">
              <div className="textField">
                <img src={search} alt="" width="30px" height="30px" />
                <input
                  className="inputTextField"
                  type="text"
                  placeholder="Search or start a new chat"
                />
              </div>
              <div className="searchImage">
                <img src={burger} alt="" width="30px" height="30px" />
              </div>
            </div>
            <div className="a">
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
            </div>
          </div>
          <div className="rightContainer">
            <div className="upsection">
              <div className="rightUpperSection">
                <div className="bothRight">
                  <div>
                    <img
                      className="rightChatImage"
                      src={chatImage}
                      alt=""
                      width="50px"
                      height="47px"
                    />
                  </div>
                  <div className="onlineAndMessage">
                    <div className="rightName">Muhammad Hamza Younas</div>
                    <div className="onlineStatus">Online</div>
                  </div>
                </div>
                <div className="bothLeft">
                  <div className="searchimg">
                    <img src={search} alt="" width="30px" height="30px" />
                  </div>
                  <div className="dotsimg">
                    <img src={dots} alt="" width="30px" height="25px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="downSection">
              <div className="rightLowerSection">
                <div className="day">
                  <p>Sunday</p>
                </div>
              </div>
              <div className="messages">
                <Message text="HEY...!" type="send" />
                <Message
                  text="AOA. You Are Muslim Dont Say Hey Say AOA"
                  type="receive"
                />
                <Message text="OK Bro Sooory I Got It" type="send" />
                <Message text="HEY...?" type="receive" />
                <Message text="OK Bro Sooory I Got It" type="send" />
                <Message text="HEY...?" type="receive" />
                <Message text="What The Fuck...!!!?" type="send" />
                <Message text="HaHaHa" type="receive" />
              </div>
            </div>
            <div className="lowerRightSection">
              <div className="twoImg">
                <div className="smiley">
                  <img src={smiley} alt="" width="38px" height="38px" />
                </div>
                <div className="attach">
                  <img src={attach} alt="" width="30px" height="30px" />
                </div>
              </div>
              <div className="messageTyping">
                <input className="searchDiv" type="text" placeholder="Search" />
              </div>
              <div className="microImg">
                <img src={micro} alt="" width="30px" height="30px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// #423A3A
// 282424
