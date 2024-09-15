import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Harshkirola123')
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         setData(res)
    //         console.log(res);
    //     })
    // },[])
    const data = useLoaderData()
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            GitHub followers: {data.followers}
            <img src={data.avatar_url} alt="git picture" width={300}/>
        </div>
    )
}
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Harshkirola123')
    return response.json()
}