import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    'Dashboard',
    'Projects',
    'Tasks',
    'Calendar',
    'Messages',
    'Settings',
  ];

  return (
    <aside className="bg-gray-900 text-white p-4 w-1/6 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400 text-sm">Welcome, User123</p>
      </div>
      <ul className="space-y-2">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center hover:bg-gray-800 py-3 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
