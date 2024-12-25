import React, { useState } from 'react';
import './Uppersidebar.css';

const Uppernavbar = () => {
    const [defaultMenuOpen, setDefaultMenuOpen] = useState(false);
    const [homePageMenuOpen, setHomePageMenuOpen] = useState(false);

    const [selectedDefaultOption, setSelectedDefaultOption] = useState('Default');
    const [selectedHomePageOption, setSelectedHomePageOption] = useState('Home Page');
    const [selectedDefaultImage, setSelectedDefaultImage] = useState('');
    const [selectedHomePageImage, setSelectedHomePageImage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Default options with images
    const defaultOptions = [
        { name: 'Default', image: 'upper-navbar-img/globe.png' },
        { name: 'Gulshan', image: 'path/to/gulshan.jpg' },
        { name: 'Rajesh', image: 'path/to/rajesh.jpg' }
    ];

    // Home page options with images
    const homePageOptions = [
        { name: 'Home Option 1', image: 'upper-navbar-img/home.png' },
        { name: 'Home Option 2', image: 'path/to/home2.jpg' },
        { name: 'Home Option 3', image: 'path/to/home3.jpg' }
    ];

    const toggleDefaultMenu = () => setDefaultMenuOpen(!defaultMenuOpen);
    const toggleHomePageMenu = () => setHomePageMenuOpen(!homePageMenuOpen);

    const handleSearch = (e) => setSearchQuery(e.target.value);

    const handleDefaultSelect = (option) => {
        setSelectedDefaultOption(option.name);
        setSelectedDefaultImage(option.image);
        setDefaultMenuOpen(false); // Close the dropdown after selection
    };

    const handleHomePageSelect = (option) => {
        setSelectedHomePageOption(option.name);
        setSelectedHomePageImage(option.image);
        setHomePageMenuOpen(false); // Close the dropdown after selection
    };

    const filteredHomePageOptions = homePageOptions.filter((option) =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="navbar">
            {/* Left Section */}
            <div className="navbar-left">
                <button className="back-btn">
                    <img className="exit-img" src="upper-navbar-img/exit.png" alt="Exit" />
                    <span className="tooltip">Exit</span>
                </button>
                <span className="brand">
                    Feather
                    <span className="status">
                        <span className="status-indicator"></span> Live
                    </span>
                </span>
                <button className="back-btn">
                    <img className="exit-img" src="upper-navbar-img/dots.png" alt="Dots" />
                    <span className="tooltip">Dawn</span>
                </button>
            </div>

            {/* Center Section */}
            <div className="navbar-center">
                {/* Default Dropdown */}
                <div className="dropdown">
                    <span className="menu-item" onClick={toggleDefaultMenu}>
                        <img src={selectedDefaultImage} alt="Selected" className="dropdown-img" />
                        {selectedDefaultOption} <i className="icon-chevron-down"></i>
                    </span>
                    {defaultMenuOpen && (
                        <ul className="dropdown-menu">
                            {defaultOptions.map((option, index) => (
                                <li key={index} onClick={() => handleDefaultSelect(option)}>
                                    <img src={option.image} alt={option.name} className="dropdown-img" />
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Home Page Dropdown with Search */}
                <div className="dropdown">
                    <span className="menu-item" onClick={toggleHomePageMenu}>
                        <img src={selectedHomePageImage} alt="Selected" className="dropdown-img" />
                        {selectedHomePageOption} <i className="icon-chevron-down"></i>
                    </span>
                    {homePageMenuOpen && (
                        <div className="dropdown-menu">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="dropdown-search"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <ul>
                                {filteredHomePageOptions.length > 0 ? (
                                    filteredHomePageOptions.map((option, index) => (
                                        <li key={index} onClick={() => handleHomePageSelect(option)}>
                                            <img src={option.image} alt={option.name} className="dropdown-img" />
                                            {option.name}
                                        </li>
                                    ))
                                ) : (
                                    <li className="no-results">No results found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div className="navbar-right">
                <button className="icon-btn">
                    <i className="icon-desktop"></i>
                    <span className="tooltip">Desktop</span>
                </button>
                <button className="icon-btn">
                    <i className="icon-tablet"></i>
                    <span className="tooltip">Tablet</span>
                </button>
                <button className="icon-btn">
                    <i className="icon-refresh"></i>
                    <span className="tooltip">Refresh</span>
                </button>
                <button className="save-btn">Save</button>
            </div>
        </div>
    );
};


export default Uppernavbar;
