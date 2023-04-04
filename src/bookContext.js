import React from "react";

 let books=[{ISBN:101,title:"C",author:"Yashwant K"},

 {ISBN:102,title:"Java",author:"Yashwant K"},

 {ISBN:103,title:"DBMS",author:"Yashwant K"},

 {ISBN:104,title:"Python",author:"Yashwant K"}

];



export const BookContext=React.createContext(books);

