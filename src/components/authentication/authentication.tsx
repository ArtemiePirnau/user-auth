import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './authentication.scss';

const Authentication = () => {
   return (
      <section className="authentication pt">
         <nav className="authentication__menu">
            <ul className="menu">
               <li>
                  <Link to="/authentication/login">Login</Link>
               </li>
               <li>
                  <Link to="/authentication/register">Register</Link>
               </li>
            </ul>
         </nav>
         <Outlet />
      </section>
   );
};
export default Authentication;
