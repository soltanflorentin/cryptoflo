
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';

const TestTable = () => {
        const [coin1, setCoin1] = useState("");
        const [coin2, setCoin2] = useState("");
        const [coin3, setCoin3] = useState("");
        const [coin4, setCoin4] = useState("");
        const [coin5, setCoin5] = useState("");
        const [coin6, setCoin6] = useState("");
        const [coin7, setCoin7] = useState("");
        const [coin8, setCoin8] = useState("");
        const [coin9, setCoin9] = useState("");
        const [coin10, setCoin10] = useState("");

        const [price1, setPrice1] = useState("");
        const [price2, setPrice2] = useState("");
        const [price3, setPrice3] = useState("");
        const [price4, setPrice4] = useState("");
        const [price5, setPrice5] = useState("");
        const [price6, setPrice6] = useState("");
        const [price7, setPrice7] = useState("");
        const [price8, setPrice8] = useState("");
        const [price9, setPrice9] = useState("");
        const [price10, setPrice10] = useState("");

        const [marketCap1, setMarketCap1] = useState("");
        const [marketCap2, setMarketCap2] = useState("");
        const [marketCap3, setMarketCap3] = useState("");
        const [marketCap4, setMarketCap4] = useState("");
        const [marketCap5, setMarketCap5] = useState("");
        const [marketCap6, setMarketCap6] = useState("");
        const [marketCap7, setMarketCap7] = useState("");
        const [marketCap8, setMarketCap8] = useState("");
        const [marketCap9, setMarketCap9] = useState("");
        const [marketCap10, setMarketCap10] = useState("");

        const [lastDay1, setLastDay1] = useState("");
        const [lastDay2, setLastDay2] = useState("");
        const [lastDay3, setLastDay3] = useState("");
        const [lastDay4, setLastDay4] = useState("");
        const [lastDay5, setLastDay5] = useState("");
        const [lastDay6, setLastDay6] = useState("");
        const [lastDay7, setLastDay7] = useState("");
        const [lastDay8, setLastDay8] = useState("");
        const [lastDay9, setLastDay9] = useState("");
        const [lastDay10, setLastDay10] = useState("");
    
   const rowData = [
       {coin: coin1, "24/h": lastDay1, price: price1, marketCap: marketCap1},
       {coin: coin2, "24/h": lastDay2, price: price2, marketCap: marketCap2},
       {coin: coin3, "24/h": lastDay3, price: price3, marketCap: marketCap3},
       {coin: coin4, "24/h": lastDay4, price: price4, marketCap: marketCap4},
       {coin: coin5, "24/h": lastDay5, price: price5, marketCap: marketCap5},
       {coin: coin6, "24/h": lastDay6, price: price6, marketCap: marketCap6},
       {coin: coin7, "24/h": lastDay7, price: price7, marketCap: marketCap7},
       {coin: coin8, "24/h": lastDay8, price: price8, marketCap: marketCap8},
       {coin: coin9, "24/h": lastDay9, price: price9, marketCap: marketCap9},
       {coin: coin10, "24/h": lastDay10, price: price10, marketCap: marketCap10}
   ];

   useEffect(() => {
    fetch("https://api.lunarcrush.com/v2?data=market&key=vhghf5jxd8fgotjykitjow&limit=10&sort=mc&desc=true")
    .then((e)=> {
       return e.json();
    })
    .then((data) => {
        if(data){
            console.log(data);
            for (let i=0; i < data.data.length; i++) {
                let coinTemp = "setCoin" + (i+1).toString();
                let priceTemp = "setPrice" + (i+1).toString();
                let marketCapTemp = "setMarketCap" + (i+1).toString();
                let lastDayChange = "setLastDay" + (i+1).toString();
                console.log(data);
                let cn = eval(coinTemp);
                let pr = eval(priceTemp);
                let mc = eval(marketCapTemp);
                let pc = eval(lastDayChange);
                cn(data.data[i].n);
                pr(data.data[i].p.toFixed(2));
                mc(data.data[i].mc.toFixed(0));
                pc(data.data[i].pc);
              
            }
            //setPrice1(data.data.market_data.price_usd.toFixed(2));
            //setCoin1(data.data.name);
        }
        
    })
   }, [])


 
   
   return (
       <div className="ag-theme-alpine" id="tableStartPage">
           <AgGridReact 
            rowData={rowData}  
            rowSelection="single">
               <AgGridColumn field="coin" sortable= {true} filter={true} ></AgGridColumn>
               <AgGridColumn field= "24/h" sortable= {true} cellStyle={(params) => {
                   return params.value < 0 ? {background: "#FF7F7F"} : {background: "lightGreen"};
                  
               }}></AgGridColumn>
               <AgGridColumn field="price" sortable= {true} ></AgGridColumn>
               <AgGridColumn field="marketCap" sortable= {true} ></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default TestTable;