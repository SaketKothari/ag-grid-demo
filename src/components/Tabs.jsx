// Tabs.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTab, removeTab, toggleTab } from '../slices/tabsSlice';
import Tab from './Tab';

function Tabs() {
  const tabs = useSelector((state) => state.tabs.tabs);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const dispatch = useDispatch();

  const handleTabClick = (index) => {
    dispatch(toggleTab(index));
  };

  const handleCloseTab = (index) => {
    dispatch(removeTab(index));
  };

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
