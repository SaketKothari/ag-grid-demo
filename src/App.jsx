import './App.css';
import { AgGridReact } from 'ag-grid-react';

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
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </>
  );
}

export default App;
