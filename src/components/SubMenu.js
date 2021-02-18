import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink= styled(Link)`
// display:flex;
// color:#000;
`;
const SidebarLabel =styled.span`
margin-left: 16px;`;

const DropdownLink= styled(Link)`
background:#fff;
height:60px;
padding-left:30px;
display:flex;
align-item:center;
color:#000;
font-size:16px;

&:hover {
    background: #632ce4;
    cursor: pointer;
  }`;

//   const SubMenu = ({ item }) =>
// {
//     const [ subnav, setSubnav] =useState(false);
//     const showSubnav = ()=> setSubnav(!subnav);

// return (
//    <>
//    <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
//     <div>
//         {item.icon}
//         <SidebarLabel>{item.title}</SidebarLabel>
//     </div>
//     <div>
//         {item.subNav && subnav
//          ? item.iconOpened
//           : item.subNav
//            ? item.iconClosed
//             : null}
//     </div>
//    </SidebarLink>
//    {subnav && item.subNav.map((item, index) =>{
//    return(
//        <DropdownLinks to={ item.path} key={index}>
//             {item.icon}
//         <SidebarLabel>{item.Title}</SidebarLabel>
//        </DropdownLinks>
//    );
// })}
//    </>
// );
// };
// export default Submenu;


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </>
    );
  };
  
  export default SubMenu;