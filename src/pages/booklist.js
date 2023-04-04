/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { BookContext } from '../bookContext';

export const BookList = ({callbackFun, books, ctn, datas}) => {
    //const books = useContext(BookContext);
    const [book, setBooks] = useState({});
    const [count, setCount] = useState(ctn);
    const [data, setData] = useState({});
    useEffect(() => {
        setBooks(books);
        setData(datas);
        console.log(books, book,'dipu',datas);
    }, []);
    const delayAddOne = () => {
        setCount(count + 1);
    }   
    const deleteList = (id) => {
        const index = book.indexOf(book.find(n => n.ISBN === id));
        let arra = [...book];
        // console.log(index);
        //console.log(book, '1');
        arra.splice(index, 1);        
        setBooks(arra);
        //console.log(book, '2');
    }

    const deleteData = (d) => {        
        let arr = [...data];
        arr.splice(d, 1);
        setData(arr); 
    }
    return (
        <>
            {console.log(book, 'test')}
            {book.length > 0 &&
                <table border="1">
                    <tr><th>ID{book.length}</th><th>Title</th><th>Author</th><th>Action</th></tr>
                    {
                        book.map((b) => {
                            return (
                                <tr key={b.ISBN}>
                                    <td>{b.ISBN}</td>
                                    <td>{b.title}</td>
                                    <td>{b.author}</td>
                                    <td><Link onClick={()=>callbackFun(b)}>Edit</Link>|<Link onClick={() => deleteList(b.ISBN)}>Delete</Link></td>

                                </tr>
                            )
                        })
                    }
                </table>
            }
            <h1>Count: {count}</h1>
            <button onClick={() => delayAddOne()}>+ 1</button>
            <>{console.log(data, 'tes11t')}{
                data.length > 0 &&
                 data.map((d,i) => {
                    return (<div onClick={() => deleteData(i)}>{d}</div>)
})}</>
        </>
    )

}