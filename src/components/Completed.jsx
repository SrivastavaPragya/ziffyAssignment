import React from "react";

const Completed = () => {
  return (
    <div className="bottomPart1">
      <div className="card">
        <div className="header">
          <img src="./Rectangle1.jpg" alt="Logo" className="logo" />
          <div className="taskDetails">
            <p className="taskTitle">
              Write a thread with memes for PP Program on Solana <span className="by">by</span> <span className="company">Pstake</span> 
            </p>
            <div className="com">
              <p className="taskMeta">content</p>
              <p className="priceColour">
             
                <span className="dollar">700</span> USDC
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="date"> 06/03/2023</p>
          <p className="contentDescription">
           
            <span className="no">12</span> Participants
          </p>
        </div>
      </div>

      <div className="card">
        <div className="header">
          <img src="./Rectangle2.jpg" alt="Logo" className="logo" />
          <div className="taskDetails">
            <p className="taskTitle">Armada UI/Ux Review <span className="by">by</span> <span className="company">Superteam</span></p>

            <div className="com">
              <p className="taskMeta1">Design</p>
              <p className="place">1st Place</p>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="date"> 21/03/2023</p>
          <p className="contentDescription">
            <span className="no">07</span> Participants
          </p>
        </div>
      </div>

      <div className="card">
        <div className="header">
          <img src="./Rectangle3.jpg" alt="Logo" className="logo" />
          <div className="taskDetails">
            <p className="taskTitle">Create a Frame for Farcaster  <span className="by">by</span>  <span className="company">Deribet</span></p>

            <div className="com">
              <p className="taskMeta2">content</p>
              <p className="place">1st Place</p>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="date"> 04/03/2023</p>
          <p className="contentDescription">
            <span className="no">36</span> Participants
          </p>
        </div>
      </div>

      <div className="card">
        <div className="header">
          <img src="./Rectangle4.jpg" alt="Logo" className="logo" />
          <div className="taskDetails">
            <p className="taskTitle">Design Earn's Talent <span className="by">by</span> <span className="company">Deans's Dio</span> </p>

            <div className="com">
              <p className="taskMeta3">Backend</p>
              <p className="priceColour">
                {" "}
                <span className="dollar">500</span> USDC
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="date"> 14/03/2023</p>
          <p className="contentDescription">
            <span className="no">20</span> Participants
          </p>
        </div>
      </div>
    </div>
  );
};

export default Completed;
