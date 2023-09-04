import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import PriceFilter from './components/PriceFilter';
import SimpleComp from './components/SimpleComp';
import Rendering from './components/Rendering';

function App() {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    {
      field: 'make',
      cellRenderer: SimpleComp,
    },
    { field: 'model' },
    {
      field: 'price',
      cellRenderer: Rendering,
      filter: PriceFilter,
      filterParams: {
        title: 'My Custom Filter',
      },
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      sortable: true,
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

  const buttonListener = useCallback(() => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div className="app-container">
      <button onClick={buttonListener}>Push Me</button>
      <div
        className="ag-theme-alpine"
        style={{ width: '100%', height: '100vh' }}
      >
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
    </div>
  );
}

export default App;
