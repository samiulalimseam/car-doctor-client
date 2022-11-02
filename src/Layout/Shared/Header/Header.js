

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

let theme= false;
const Header = () => {
    const  [themeMode,setThemeMode] = useState(false); 
     
    const menuItems = <>
    <li>

    <Link className='font-semibold' to={'/'}>HOME</Link>
    <Link className='font-semibold' to={'/login'}>LOGIN</Link>
    <Link className='font-semibold' to={'/signup'}>SIGNUP</Link>
    </li>
    </>

const themeHandler = () =>{
    setThemeMode(!themeMode);
    theme = !darkMode;
}



    return (
        <div>
            <div className="navbar h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


       {/* this is mobile header  */}
        
        {menuItems}
      </ul>
    </div>
        <Link to={'/'} className='btn btn-ghost normal-case text-xl' ><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">

        {/* this is larger pc header  */}
    {menuItems}

    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointment</button>
    <button onClick={themeHandler} className="btn m-2 primary">{
        themeMode? 'Light' : 'Dark'
    }</button>
    
   
  </div>
</div>
        </div>
    );
};

export function darkMode(){
    const mode = !theme;
    return mode;
}
export default Header; 