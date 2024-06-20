import React, { useState } from 'react';
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Completed from './Completed';
import InReview from './InReview';

const Main = () => {

  const [activePart, setActivePart] = useState('completed');
  return (
    <div className="container">
    <div className="main1">
   
      <div className="topPart">
        <ul className="tabList">
          <li className="work">Work History</li>
          <div className="workBorder"></div>
          <li className="completed" onClick={()=>setActivePart('completed')}>Completed</li>
          <li className="Review" onClick={()=>setActivePart('Review')}>In Review</li>
        </ul>
        <div className="filterSection">
        <div className="filterButton">
          <FontAwesomeIcon icon={faFilter} /> {/* Filter icon */}
          <span>Filter By</span>
        </div>
          <select className="filterSelect">
            <option>All</option>
            <option>Design</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Blockchain</option>
            <option>Content</option>
           
          </select>
        </div>
      </div>
      {activePart==='completed'&&(
      <Completed/>
      )}

{activePart==='Review'&&(
      <InReview/>
      )}
    </div>

    <div className="leftPart">
    <input type="text" placeholder="Search Bounties, Profiles, and more..." class="search-input" />
    </div>
    </div>
  );
};

export default Main;

