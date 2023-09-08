import React, { useState } from 'react';
import Grid from './Grid';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      text: 'Code',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
    },
    {
      text: 'About',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
    },
    {
      text: 'Contact',
      content: <Grid />,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleCloseTab = (index) => {
    setActiveTab(-1); // Reset activeTab to -1 to close the tab
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab-header-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.text}
            {activeTab === index && (
              <button
                className="close-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the tab from closing when clicking the X button
                  handleCloseTab(index);
                }}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeTab !== -1 && (
          <div className="tab-content-item active">
            <h2>{tabData[activeTab].text}</h2>
            <p>{tabData[activeTab].content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
