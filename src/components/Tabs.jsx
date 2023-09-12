import React, { useState } from 'react';
import Tab from './Tab';
import Grid from './Grid';

function Tabs() {
  const [tabs, setTabs] = useState([
    {
      text: 'Code',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
      isVisible: true,
    },
    {
      text: 'About',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...',
      isVisible: true,
    },
    {
      text: 'Contact',
      content: <Grid />,
      isVisible: true,
    },
  ]);

  const handleTabClick = (index) => {
    // Toggle visibility of the clicked tab
    const updatedTabs = tabs.map((tab, i) => {
      return { ...tab, isVisible: i === index };
    });
    setTabs(updatedTabs);
  };

  const handleCloseTab = (index) => {
    // Remove the tab from the array
    const updatedTabs = tabs.filter((tab, i) => i !== index);
    setTabs(updatedTabs);

    // Select the first tab if it's not visible
    if (index === activeTab) {
      const firstVisibleTab = updatedTabs.findIndex((tab) => tab.isVisible);
      setActiveTab(firstVisibleTab !== -1 ? firstVisibleTab : -1);
    }
  };

  const activeTab = tabs.findIndex((tab) => tab.isVisible);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-11/12 md:w-2/3 lg:w-1/2">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              tab={tab}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
              onClose={() => handleCloseTab(index)}
            />
          ))}
        </ul>
        <div className="tabs w-full h-96 bg-gray-100 shadow-md">
          <div className="tab-content relative h-full overflow-hidden">
            {activeTab !== -1 && (
              <div className="tab-content-item absolute w-full text-center transform transition-transform duration-500 ease-in-out">
                <h2 className="font-semibold text-xl">
                  {tabs[activeTab].text}
                </h2>
                <p className="p-4">{tabs[activeTab].content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
