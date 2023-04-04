import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import {Users} from "./pages/users";
import Batch from "./pages/batch";

import { BookContext } from './bookContext';

export default function App() {
  const books= useContext(BookContext);

  return (
    <BookContext.Provider value={books}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:id" element={<Contact />} />
          <Route path="users" element={<Users />} />
          
           <Route path="batch" element={<Batch />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BookContext.Provider>
  );
}
