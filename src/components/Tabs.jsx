import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTab, removeTab, updateTabContent } from '../slices/tabsSlice';

import Tab from './Tab';
import Grid from './Grid';

import ContactTab from './ContactTab';

import { fetchTabContent } from '../utils/api';
import { useParams } from 'react-router-dom';

const Tabs = () => {
  const tabs = useSelector((state) => state.tabs.tabs);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const dispatch = useDispatch();
  const { tabName } = useParams();

  useEffect(() => {
    tabs.forEach((tab, index) => {
      if (!tab.contentFromAPI) {
        fetchTabContent(index)
          .then((data) => {
            if (data && data.userId && data.body) {
              dispatch(updateTabContent({ index, data }));
            } else {
              console.error(`Invalid data received for tab ${index}:`, data);
            }
          })
          .catch((error) => {
            console.error(`Error fetching tab content: ${error}`);
          });
      }
    });
  }, [tabName, tabs, dispatch]);

  const handleTabClick = (index) => {
    dispatch(toggleTab(index));
  };

  const handleCloseTab = (index) => {
    dispatch(removeTab(index)); // Add this handler to remove the tab
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Content */}
      <main className="w-3/4 p-6 bg-gray-200">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Horizontal Tabs */}
          <div className="bg-gray-900 text-white flex items-center space-x-4 list-none">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                tab={tab}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
                onClose={() => handleCloseTab(index)} // Add this to close the tab
                horizontal
              />
            ))}
          </div>

          {/* Tab Content */}
          {activeTab !== -1 && (
            <div className="mt-6">
              {tabs[activeTab].text === 'Code' ? (
                <Grid />
              ) : tabs[activeTab].text === 'Contact' ? (
                <ContactTab />
              ): (
                <>
                  <h2 className="text-2xl font-semibold mb-2">
                    {tabs[activeTab].text}
                  </h2>
                  <p className="text-gray-600">
                    User ID: {tabs[activeTab].data.userId}
                    <br />
                    Content: {tabs[activeTab].data.body}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tabs;
