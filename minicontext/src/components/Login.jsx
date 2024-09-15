import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username,setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
            {"  "}
            <input type="password" placeholder="password" onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}