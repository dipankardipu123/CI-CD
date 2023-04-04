/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import { BookContext } from '../bookContext';
import {BookList} from './booklist';

const Contact = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
 
    const books = useContext(BookContext);
    const [book, setBook] = useState({});
    const data = ['cyb','tcs','rr'];
    const onSubmit = data => {
        console.log(data, book);
        if(book.ISBN) {
            const index = books.indexOf(books.find(b => b.ISBN === book.ISBN));
            books.splice(index, 1, data);
        } else {
            books.push(data);
        }
        setBook(books);
    }
    const childCallBack = (book2) => {
        setValue("ISBN", book2.ISBN);
        setValue("title", book2.title);
        setValue("author", book2.author);
        setBook(book2);
        return true;
    }
    const resetData = () => {
        setValue("ISBN", '');
        setValue("title", '');
        setValue("author", '');
        setBook({});
    }
    return (
        <>
            
       
            <form onSubmit={handleSubmit(onSubmit)}>
               
                ID: <input type="text" {...register("ISBN",
                { required: true,
                  value: book.ISBN,
                  onChange: (e) => setValue("ISBN",`${e.target.value}`)
                })}/>
                
                {errors.ISBN && errors.ISBN.type === "required" && <span style={{ color: "red" }}>This is required</span>}
                Title: <input type="text" {...register("title", { required: true,
                  value: book.title,
                  onChange: (e) => setValue("title",`${e.target.value}`)
                })} />
                Author: <input type="text" {...register("author", { required: true,
                  value: book.author,
                  onChange: (e) => setValue("author",`${e.target.value}`)
                })}  />
                
                <br/> <br/><input type="submit" /> <input type="button" value="Reset" onClick={resetData}/>
            </form>

            <br/> <br/><br/> <br/>
            <BookList callbackFun={childCallBack} datas={data} books={books} ctn={5}></BookList>
            
        </>
    )
}
export default Contact;