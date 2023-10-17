import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { faker } from '@faker-js/faker';

const Grid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnDefs] = useState([
    { field: 'make', cellRenderer: 'loading' },
    { field: 'model' },
    { field: 'price' },
  ]);

  const datasource = {
    getRows(params) {
      // console.log(JSON.stringify(params, null, 1));
      const { startRow, endRow } = params;

      // Generate fake data
      const fakeData = [];
      for (let i = startRow; i < endRow; i++) {
        fakeData.push({
          make: faker.vehicle.manufacturer(),
          model: faker.vehicle.model(),
          price: faker.finance.amount(10000, 100000, 2, '$'),
        });
      }

      // Simulate a delay to mimic server-side fetching
      setTimeout(() => {
        params.successCallback(fakeData, 100000); // Assuming there are 100000 total rows
      }, 1000); // Adjust the delay as needed
    },
  };

  const components = {
    loading: (params) => {
      if (params.value !== undefined) {
        return params.value;
      } else {
        return (
          <img
            src="https://www.ag-grid.com/example-assets/loading.gif"
            alt="Loading"
          />
        );
      }
    },
  };

  const onGridReady = (params) => {
    setGridApi(params);
    // Register datasource with the grid
    params.api.setDatasource(datasource);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowModelType="infinite"
        defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
        onGridReady={onGridReady}
        components={components}
      ></AgGridReact>
    </div>
  );
};

export default Grid;
