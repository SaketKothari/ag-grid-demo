import { Link } from 'react-router-dom';

function Tab({ tab, isActive, onClick, onClose }) {
  return (
    <li className="mr-2">
      <Link
        to={`/tabs/${tab.text.toLowerCase()}`}
        className={`inline-block p-4 ${
          isActive
            ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
            : 'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }`}
        onClick={onClick}
      >
        {tab.text}
        {isActive && (
          <button
            className="close-button ml-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            X
          </button>
        )}
      </Link>
    </li>
  );
}

export default Tab;
