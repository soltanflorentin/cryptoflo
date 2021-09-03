import { useState } from "react";
import Axios from "axios";

const TestDinamic = () => {
    const [pret, setPret] = useState(0);
    //const respond = fetch("http://localhost/SiteCrypto/Crypto_API/index2.php")
    //const respond = fetch("http://reqres.in/api/users")
    //.then(res => res);
    //setInterval(flo, 4000);

    // const coin = () => 
    // {
    //  fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    // .then((e)=> {
    //    return e.json();
    // })
    // .then((data) => {
    //     if(data){
    //         //console.log(data.data.market_data.price_usd);
    //         setPret(data.data.market_data.price_usd.toFixed(2));
    //     }
        
    // })}


    return ( 
        <div className="testDinamic" style={{marginLeft: "100px"}}>
            <button>Button</button>
           
        </div>
     );
}
 
export default TestDinamic;