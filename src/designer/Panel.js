import React, { useState } from 'react';
import './Panel.css';
import Tree from './Tree/Tree';
import Screen from './screen/Screen';
import Setting from './setting/Setting';

const Panel = () => {
  const [selectedOption, setSelectedOption] = useState('header');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [previewDevice, setPreviewDevice] = useState('desktop');

  const devices = {
    desktop: { width: '100%', height: '100%', name: 'Desktop' },
    iphone13: { width: '390px', height: '844px', name: 'iPhone 13' },
    iphone8: { width: '375px', height: '667px', name: 'iPhone 8' },
    ipadAir: { width: '820px', height: '1180px', name: 'iPad Air' },
    galaxyS20: { width: '360px', height: '800px', name: 'Galaxy S20' },
    pixel5: { width: '393px', height: '851px', name: 'Pixel 5' }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const changePreviewDevice = (device) => {
    setPreviewDevice(device);
  };

  // If in preview mode, show only the Screen component with device selection
  if (isPreviewMode) {
    const currentDevice = devices[previewDevice];
    
    return (
      <div className="preview-mode">
        <div className="preview-controls">
          <button 
            className="exit-preview-button" 
            onClick={togglePreviewMode}
          >
            Exit Preview
          </button>
          
          <div className="device-selector">
            <select 
              value={previewDevice}
              onChange={(e) => changePreviewDevice(e.target.value)}
              className="device-dropdown"
            >
              {Object.keys(devices).map(device => (
                <option key={device} value={device}>
                  {devices[device].name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="device-frame" style={{ 
          maxWidth: currentDevice.width,
          height: currentDevice.height,
          margin: '20px auto',
          border: previewDevice !== 'desktop' ? '10px solid #333' : 'none',
          borderRadius: previewDevice !== 'desktop' ? '20px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <div className="preview-screen-wrapper">
            <Screen deviceType={previewDevice} />
          </div>
        </div>
      </div>
    );
  }

  // Normal panel view
  return (
    <>
      <button 
        className="preview-button" 
        onClick={togglePreviewMode}
      >
        Preview
      </button>
      
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
              <span className="tooltip">Embed</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-content second-columns">
          <Tree />
        </div>
        <div className="small-screen-container">
          <Screen />
        </div>
        <div className="sidebar-content third-columns">
          <Setting />
        </div>
      </div>
    </>
  );
};

export default Panel;