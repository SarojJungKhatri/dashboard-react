import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData =[
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Categories',
        path:'/categories',
        icon:<FaIcons.FaMailBulk/>,
        iconClosed:<IoIcons.IoIosArrowDown/>,
        iconOpened:<IoIcons.IoIosArrowUp/>,
        cName:'nav-text',
        subNav:[
            {
            title:'Create Categories',
            path:'/create_categories',
            icon:<FaIcons.FaLayerGroup/>,
            cName:'nav-text'
        }
        ]
    },
    {
        title:'Generate link',
        path:'/generate_link',
        icon:<FaIcons.FaLifeRing/>,
        cName:'nav-text'
    },
    
    {
        title:'Link',
        path:'/link',
        icon:<FaIcons.FaLink/>,
        cName:'nav-text'
    },
    {
        title:'Customer',
        path:'/customer',
        icon:<FaIcons.FaUserTie/>,
        cName:'nav-text'
    },
]
