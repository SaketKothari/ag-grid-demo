import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SimpleComp = (params) => {
  const onDollar = () => alert('Dollar ' + params.value);
  const onAt = () => alert('At ' + params.value);

  return (
    <div>
      <button onClick={() => onDollar()}>$</button>
      <button onClick={onAt}>@</button>
      {params.value}
    </div>
  );
};

function App() {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', cellRenderer: SimpleComp },
    { field: 'model' },
    { field: 'price' },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  });

  return (
    <>
      <button onClick={buttonListener}>Push Me</button>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
          onCellClicked={cellClickedListener}
        />
      </div>
    </>
  );
}

export default App;
