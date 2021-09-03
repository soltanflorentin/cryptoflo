
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';

const TestTable = () => {
        const [coin1, setCoin1] = useState("coin1");
        const [coin2, setCoin2] = useState("coin2");
        const [coin3, setCoin3] = useState("coin3");
        const [coin4, setCoin4] = useState("coin4");
        const [coin5, setCoin5] = useState("coin5");

        const [price1, setPrice1] = useState("price1");
        const [price2, setPrice2] = useState("price2");
        const [price3, setPrice3] = useState("price3");
        const [price4, setPrice4] = useState("price4");
        const [price5, setPrice5] = useState("price5");

   const rowData = [
       {coin: coin1, "24/h": "Celica", price: price1, MarketCap: 5000000},
       {coin: coin2, "24/h": "Mondeo", price: price2, MarketCap: 5000000},
       {coin: coin3, "24/h": "Boxter", price: price3, MarketCap: 5000000},
       {coin: coin4, "24/h": "Mondeo", price: price4, MarketCap: 5000000},
       {coin: coin5, "24/h": "Boxter", price: price5, MarketCap: 5000000}
   ];

   useEffect(() => {
    fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then((e)=> {
       return e.json();
    })
    .then((data) => {
        if(data){
            console.log(data);
            setPrice1(data.data.market_data.price_usd.toFixed(2));
            setCoin1(data.data.name);
        }
        
    })
   }, [])

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