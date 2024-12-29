import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Tabbedcard = () => {
    const tabs = [
      { label: "Active", href: "#", isActive: true },
      { label: "Link", href: "#", isActive: false },
      { label: "Disabled", href: "#", isActive: false, isDisabled: true },
    ];
  
    return (
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {tabs.map((tab, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${tab.isActive ? "active" : ""} ${
                    tab.isDisabled ? "disabled" : ""
                  }`}
                  href={tab.href}
                  tabIndex={tab.isDisabled ? "-1" : undefined}
                  aria-disabled={tab.isDisabled ? "true" : undefined}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };
  
  export default Tabbedcard;
  