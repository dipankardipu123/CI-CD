/* eslint-disable */
import React,{ useState, useEffect } from "react";
import { flushSync } from "react-dom";


const Batch = () => {
    const [count, setCount] =useState(0);
    const [name, setName] =useState('TCS');
    // useEffect(()=>{
    //     setName('TCG');
    //     setCount(c => c+1)
    // },[]);
    // useEffect(()=>{
    //     setName('MCG');
    //     setCount(c => c+1)
    // },[]);
    // useEffect(()=>{
    //     setName('LCG');
    //     setCount(c => c+1)
    // },[]);
    console.log('render count', React.version);
return (
<>
<h2>Batching</h2>
<div>Count {count}</div>
<div>Company {name}</div>
<button onClick={() => {
    setTimeout(() => { 
    flushSync(() => {
   
    setCount(c => c+1)
    setName('CTS')
    })},2000);
    }}>Click</button>
</>
)
}
export default Batch;