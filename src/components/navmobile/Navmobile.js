import "./../../styles/styles.css";
import "./../../styles/styles.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Link from "@mui/material/Link";
//import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import axamobile from "./../../styles/img/axamobile.png";
import MyClass from "./../myclass/MyClass";
import { Home } from "react-feather";
import { MessageSquare } from "react-feather";
import { User } from "react-feather";
import { BarChart } from "react-feather";
import { Archive } from "react-feather";
import { HelpCircle } from "react-feather";
import { Settings } from "react-feather";


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //const feather = require("feather-icons");
   const [showResults, setShowResults] = React.useState(false);
   const onClick = () => setShowResults(!showResults);
   return (
      <React.Fragment>
        {/* <Box
           sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
         >
       <Link href="/">
         <p className="logo">
           <img src={axamobile}></img>
         </p>
       </Link>
       <Tooltip title="меню" className="menu-triger" onClick={onClick} />
       </Box>
       {showResults ? (
         <div id="results" className="search-results">
           <nav className="navbar">
             <ul className="navbar__menu">
               <li className="navbar__item">
                 <a href="/" className="navbar__link">
                   <Home />
                   <span>Домой</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a
                   href="https://www.aharenkov.ru/my-creative"
                   className="navbar__link"
                 >
                   <MessageSquare />
                   <span>Идеи</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a href="/aboutus" className="navbar__link">
                   <User />
                   <span>Обо мне</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a href="/reacts" className="navbar__link">
                   <BarChart />
                   <span>Проекты React</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a href="/works" className="navbar__link">
                   <Archive />
                   <span>Проекты</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a href="#" className="navbar__link">
                   <HelpCircle />
                   <span>Help</span>
                 </a>
               </li>
               <li className="navbar__item">
                 <a
                   href="https://www.aharenkov.ru/auth"
                   className="navbar__link"
                 >
                   <Settings />
                   <span>Кабинет</span>
                 </a>
               </li>
             </ul>
           </nav>
         </div>
       ) : null} */}

         <Box
           sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
         >
           <Link href="/">
             <p className="logo">
               <img src={axamobile}></img>
             </p>
           </Link>
           <Tooltip title="меню" className="menu-triger">
             <IconButton
               onClick={handleClick}
               size="small"
               sx={{ ml: 2 }}
               aria-controls={open ? "account-menu" : undefined}
               aria-haspopup="true"
               aria-expanded={open ? "true" : undefined}
             >
               <Avatar sx={{ width: 0, height: 0 }}></Avatar>
             </IconButton>
           </Tooltip>
         </Box>
         <Menu
           anchorEl={anchorEl}
           id="account-menu"
           open={open}
           onClose={handleClose}
           onClick={handleClose}
           PaperProps={{
             elevation: 0,
             sx: {
               overflow: "visible",
               filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
               mt: 1.5,
               "& .MuiAvatar-root": {
                 width: 32,
                 height: 32,
                 ml: -0.5,
                 mr: 1,
               },
               "&:before": {
                 content: '""',
                 display: "block",
                 position: "absolute",
                 top: 0,
                 right: 14,
                 width: 10,
                 height: 10,
                 bgcolor: "background.paper",
                 transform: "translateY(-50%) rotate(45deg)",
                 zIndex: 0,
               },
             },
           }}
           transformOrigin={{ horizontal: "right", vertical: "top" }}
           anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
         >
           {/* <MenuItem onClick={handleClose}>
             <Avatar />
             <Link href="https://www.aharenkov.ru/auth">Личный кабинет</Link>
           </MenuItem> */}
           {/* <MenuItem onClick={handleClose}>
             <ListItemIcon>
               <Logout fontSize="small" />
             </ListItemIcon>
             <Link href="/">Выход</Link>
           </MenuItem> */}

           <Divider />
           <MenuItem onClick={handleClose}>
             <ListItemIcon>
               <PersonAdd fontSize="small" />
             </ListItemIcon>
             <Link href="/aboutus">Обо мне</Link>
           </MenuItem>
           {/* <MenuItem onClick={handleClose}>
             <Link href="/reacts">Проекты React</Link>
           </MenuItem> */}
           <MenuItem onClick={handleClose}>
             <Link href="/works">Проекты</Link>
           </MenuItem>
           <MenuItem onClick={handleClose}>
             <Link href="https://www.aharenkov.ru/my-creative">Идеи</Link>
           </MenuItem>
           <MenuItem onClick={handleClose}>
             <Link href="/contacts">Контакты</Link>
           </MenuItem>
         </Menu>
       </React.Fragment>
   );
}
 