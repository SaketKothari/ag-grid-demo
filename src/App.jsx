import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </>
  );
}

export default App;
