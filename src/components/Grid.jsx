import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { faker } from '@faker-js/faker';

const Grid = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  // Function to generate fake data
  const generateFakeData = (rowCount) => {
    const fakeData = [];

    for (let i = 0; i < rowCount; i++) {
      fakeData.push({
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        price: faker.finance.amount(10000, 100000, 2, '$'),
      });
    }

    return fakeData;
  };

  useEffect(() => {
    // Generate and set fake data when the component mounts
    const initialRowCount = 10000; // Adjust this number as needed
    const initialData = generateFakeData(initialRowCount);
    setRowData(initialData);
  }, []);

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: '600px', width: '100%' }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={100} // Adjust the page size as needed
        ></AgGridReact>
      </div>
    </>
  );
};

export default Grid;
