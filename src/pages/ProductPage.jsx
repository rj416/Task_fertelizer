// src/pages/ProductPage.jsx
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { data } from '../utils/data'; // Adjust path as needed

const columns = [
  { field: 'id', headerName: 'ID', width: 100, sortable: true, filter: 'agTextColumnFilter' },
  { field: '_year', headerName: 'Year', width: 150, sortable: true, filter: 'agTextColumnFilter' },
  { field: 'month', headerName: 'Month', width: 150, sortable: true, filter: 'agTextColumnFilter' },
  { field: 'product', headerName: 'Product', width: 150, sortable: true, filter: 'agTextColumnFilter' },
  { field: 'state', headerName: 'State', width: 200, sortable: true, filter: 'agTextColumnFilter' },
  { field: 'requirement_in_mt_', headerName: 'Requirement (MT)', width: 200, sortable: true, filter: 'agTextColumnFilter' },
  { field: 'availability_in_mt_', headerName: 'Availability (MT)', width: 200, sortable: true, filter: 'agTextColumnFilter' },
];

const ProductPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div
        className="ag-theme-alpine"
        style={{
          height: '600px',
          width: '100%',
          '--ag-header-cell-sort-icon-color': '#000', // Default icon color
        }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={{
            filter: true, // Enables filtering on all columns by default
            sortable: true, // Enables sorting on all columns by default
          }}
        />
      </div>
    </div>
  );
};

export default ProductPage;
