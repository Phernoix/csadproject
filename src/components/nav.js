import React, { Fragment, useState } from "react";
import { Route, Link, Router, BrowserRouter, NavLink} from "react-router-dom";
import "./header.css";
import AboutUs from './../aboutUs';
import Home from './../home';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
  
     <BrowserRouter>

<div> 

<ul className ="header">
<li> <Link to={"/"}> Home </Link></li>    
<li> <Link to={"/about"}> About </Link></li>    
</ul>
</div>

     {/* <div className ="content">
    <Route exact path ="/" component ={Home} />
    <Route exact path="/about" component={AboutUs} />
    </div> */}
     </BrowserRouter>
     
  );
};


export default Nav;
