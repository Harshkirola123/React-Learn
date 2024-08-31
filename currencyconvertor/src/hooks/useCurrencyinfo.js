import { useEffect,useState } from "react";

function useCurrencyInfo(curr){
    const [dataa,setData] = useState({});

    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${curr}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[curr]))
    },[curr]);
    return dataa;

}

export default useCurrencyInfo;