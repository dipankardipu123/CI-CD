import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useCounter from "./useCounter";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState('00:00:00');
    const [error, setError] = useState("");
    const data = useCounter('00:00:00');
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").
            then((response) => setUsers(response.data.data)).
            catch(error => setError(error));
    }, []);

    const startCounter = () => {
        console.log('ddd');
    
    }
    const addUser=()=>{axios.post("https://reqres.in/api/users",{ "name": "Dipankar",  "job": "Developer"}

   ).then(response=>console.log(response.data)).catch(error=>setError(error))}
    return (
        <>
        <div>{users.map((user) => {
            return (<div> {user.id} <br />{user.email} </div>);
        }

        )}</div>
<button onClick={addUser}>Add users</button>
<div>Count Number: {flag} - {data}</div>
<button onClick={startCounter}>Start</button>
</>
    )
}
