/* eslint-disable */
import { Outlet, Link } from "react-router-dom";
import './menu.scss';
const Layout = () => {
  return (
    <>
      <nav>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Users List</Link>
          </li>
          <li>
            <Link to="/batch">Batching</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;