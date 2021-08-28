
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TestTable = () => {
   const rowData = [
       {coin: "Toyota", "24/h": "Celica", price: 35000, MarketCap: 5000000},
       {coin: "Ford", "24/h": "Mondeo", price: 32000, MarketCap: 5000000},
       {coin: "Porsche", "24/h": "Boxter", price: 72000, MarketCap: 5000000},
       {coin: "Ford", "24/h": "Mondeo", price: 32000, MarketCap: 5000000},
       {coin: "Porsche", "24/h": "Boxter", price: 72000, MarketCap: 5000000}
   ];

   return (
       <div className="ag-theme-alpine" id="tableStartPage">
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="coin"></AgGridColumn>
               <AgGridColumn field= "24/h"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
               <AgGridColumn field="MarketCap"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default TestTable;