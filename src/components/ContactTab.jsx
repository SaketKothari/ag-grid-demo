import React, { useState } from 'react';

const ContactTab = () => {
  const [selectedOption, setSelectedOption] = useState('Contact');
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [tempSelectedOption, setTempSelectedOption] = useState('Contact');

  const handleOptionChange = (event) => {
    setTempSelectedOption(event.target.value);
  };

  const handleSave = () => {
    setShowModal(false);
    setIsSaved(true);
    setSelectedOption(tempSelectedOption);
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          type="button"
          className="rounded-md bg-black text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 focus:outline-none mb-6"
          onClick={() => setShowModal(true)}
        >
          Button
        </button>
        <span className="px-2 mb-5">
          <h2>{isSaved ? selectedOption : 'Contact'}</h2>
        </span>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-semibold mb-4">Select an Option</h2>
            <select
              className="block w-full border border-gray-400 px-4 py-2 rounded shadow mb-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
              value={tempSelectedOption}
              onChange={handleOptionChange}
            >
              <option value="Contact">Contact</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

            <button
              className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTab;
