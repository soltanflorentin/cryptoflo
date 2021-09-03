

import { useEffect, useState } from 'react';

const TestTable2 = () => {
        const [coin1, setCoin1] = useState("coin1");
        const [coin2, setCoin2] = useState("coin2");
        const [coin3, setCoin3] = useState("coin3");
        const [coin4, setCoin4] = useState("coin4");
        const [coin5, setCoin5] = useState("coin5");
        const [coin6, setCoin6] = useState("coin6");
        const [coin7, setCoin7] = useState("coin7");
        const [coin8, setCoin8] = useState("coin8");
        const [coin9, setCoin9] = useState("coin9");
        const [coin10, setCoin10] = useState("coin10");

        const [price1, setPrice1] = useState("price1");
        const [price2, setPrice2] = useState("price2");
        const [price3, setPrice3] = useState("price3");
        const [price4, setPrice4] = useState("price4");
        const [price5, setPrice5] = useState("price5");
        const [price6, setPrice6] = useState("price6");
        const [price7, setPrice7] = useState("price7");
        const [price8, setPrice8] = useState("price8");
        const [price9, setPrice9] = useState("price9");
        const [price10, setPrice10] = useState("price10");

        const [marketCap1, setMarketCap1] = useState("marketCap1");
        const [marketCap2, setMarketCap2] = useState("marketCap2");
        const [marketCap3, setMarketCap3] = useState("marketCap3");
        const [marketCap4, setMarketCap4] = useState("marketCap4");
        const [marketCap5, setMarketCap5] = useState("marketCap5");
        const [marketCap6, setMarketCap6] = useState("marketCap6");
        const [marketCap7, setMarketCap7] = useState("marketCap7");
        const [marketCap8, setMarketCap8] = useState("marketCap8");
        const [marketCap9, setMarketCap9] = useState("marketCap9");
        const [marketCap10, setMarketCap10] = useState("marketCap10");

        const [lastDay1, setLastDay1] = useState("LastDay1");
        const [lastDay2, setLastDay2] = useState("LastDay2");
        const [lastDay3, setLastDay3] = useState("LastDay3");
        const [lastDay4, setLastDay4] = useState("LastDay4");
        const [lastDay5, setLastDay5] = useState("LastDay5");
        const [lastDay6, setLastDay6] = useState("LastDay6");
        const [lastDay7, setLastDay7] = useState("LastDay7");
        const [lastDay8, setLastDay8] = useState("LastDay8");
        const [lastDay9, setLastDay9] = useState("LastDay9");
        const [lastDay10, setLastDay10] = useState("LastDay10");
    
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
       <div className="" id="tableStartPage">
           <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       </div>
   );
};

export default TestTable2;