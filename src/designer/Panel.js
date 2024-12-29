import React, { useState } from 'react';
import './Panel.css';
import Tree from './Tree/Tree';
import Screen from './screen/Screen';

const Panel = () => {
  const [selectedOption, setSelectedOption] = useState('header');
  const handleOptionClick = (option) => {

  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-height">
        <ul className="sidebar-items">
          <li
            className={`sidebar-item ${selectedOption === 'header' ? 'active' : ''}`}
            onClick={() => handleOptionClick('header')}
          >
            <img src="left-sidebar-img/design-logo.png" className="design-logo" alt="Header Logo" />
            <span className="tooltip">Header</span>
          </li>
          <li
            className={`sidebar-item ${selectedOption === 'settings' ? 'active' : ''}`}
            onClick={() => handleOptionClick('settings')}
          >
            <img src="left-sidebar-img/gear.png" className="design-logo" alt="Settings Logo" />
            <span className="tooltip">Settings</span>
          </li>
          <li
            className={`sidebar-item ${selectedOption === 'embed' ? 'active' : ''}`}
            onClick={() => handleOptionClick('embed')}
          >
            <img src="left-sidebar-img/html.svg" className="design-logo" alt="App Embed Logo" />
            <span className="tooltip">App Embed</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-content second-columns"  > <Tree></Tree> </div>
      <div className="small-screen-container"   >
  <Screen />
</div>

      <div className="sidebar-content third-columns"> </div>
    </div>
  );
};

export default Panel;
