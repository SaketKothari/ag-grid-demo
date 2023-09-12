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
    setActiveTab(-1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-11/12 md:w-2/3 lg:w-1/2">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {tabData.map((tab, index) => (
            <li className="mr-2" key={index}>
              <a
                href="#"
                className={`inline-block p-4 ${
                  activeTab === index
                    ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                    : 'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.text}
                {activeTab === index && (
                  <button
                    className="close-button ml-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseTab(index);
                    }}
                  >
                    X
                  </button>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="tabs w-full h-96 bg-gray-100 shadow-md">
          <div className="tab-content relative h-full overflow-hidden">
            {activeTab !== -1 && (
              <div className="tab-content-item absolute w-full text-center transform transition-transform duration-500 ease-in-out">
                <h2 className="font-semibold text-xl">
                  {tabData[activeTab].text}
                </h2>
                <p className="p-4">{tabData[activeTab].content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
