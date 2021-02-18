import React,{ useState } from 'react';
import ReactDoM from 'react-dom';
import { Link } from 'react-router-dom';
//import { MdFingerprint, MdSettingsApplications } from 'react-icons/md'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import SubMenu from './SubMenu';
import {IconContext} from 'react-icons';
import styled from 'styled-components';
// import Logo from './images/logo.png';
// const menus-bars =styled(Link)`
// `;
function Navbar() {
    // const [click, setClick]=useState(false);
    // const handleClick = () => setClick(!click);
    const [sidebar, setSidebar]= useState(true);
    const showSidebar = () => setSidebar(sidebar)
    return (
       <>
       <IconContext.Provider value={{ }}>
           <div className="navbar">
               <div className="left-header">
                    <div className={"logo"}>
                    <img src={process.env.PUBLIC_URL +"images/logo.png"} alt="logo"/>
                    </div>

                    <Link to='#' className="menus-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <div className="right-header">
                    <ul>
                        <li>
                            <Link to='#' className="notification">
                                <IoIcons.IoIosNotificationsOutline />
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className="message">
                                <FaIcons.FaRocketchat />
                            </Link>
                        </li>
                        {/* <span>
                            <p>Jhon Doi</p>
                            <small>Admin</small>
                        </span> */}
                        <li>
                            <Link to='#' className="profile">
                                <IoIcons.IoIosPerson />
                            </Link>
                        </li>
                    </ul>
                </div>         
                            
           </div>
        
       <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'} >
           <ul className='nav-menu-items'onClick={showSidebar}>
               <li className="navbar-toggle">
                   <Link to="#" className='menus-bars'>
                       {/* <AiIcons.AiOutlineClose/> */}
                   </Link>
               </li>
               {SidebarData.map((item, index) =>
               {
                   return(
                       <li key={index} className={item.cName}>
                           <Link to={item.path}>
                               {item.icon}
                               <span> {item.title}</span>
                           </Link>
                       </li>
                    
                   );
                //    <SubMenu item={item} key={index} />
               })}
           </ul>
           </nav>  
           </IconContext.Provider> 
     </>
    );
}

export default Navbar;
