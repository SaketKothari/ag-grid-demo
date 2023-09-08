import React, { useState } from 'react';
import Grid from './Grid';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [{ text: 'Code' }, { text: 'About' }, { text: 'Contact' }];

  const tabContentData = [
    {
      title: 'Code',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
    },
    {
      title: 'About',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
    },
    {
      title: 'Contact',
      content: <Grid />,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {header.text}
          </div>
        ))}
      </div>
      <div
        className="tab-indicator"
        style={{ left: `calc(180px * ${activeTab})` }}
      ></div>
      <div className="tab-content">
        {tabContentData.map((tab, index) => (
          <div key={index} className={activeTab === index ? 'active' : ''}>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
