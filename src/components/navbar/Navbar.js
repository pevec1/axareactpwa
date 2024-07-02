import "./../../styles/styles.css";
import "./../../styles/styles.scss";
import { Link } from "react-router-dom";
import axacode from "./../../styles/img/axacode.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
//import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
//import Settings from '@mui/icons-material/Settings';
//import Logout from '@mui/icons-material/Logout';
import axamobile from "./../../styles/img/axamobile.png";

const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  //const breakpoint1 = 320;
  //const breakpoint2 = 600;
  const breakpoint3 = 1000;
  //const breakpoint4 = 1200;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  if (width > breakpoint3) {
  return (
    <ul className="logos">
      <li>
        <Link to="/">
          <p className="logo">
            <img src={axacode} alt="AXAcode"></img>
          </p>
        </Link>
      </li>
      <li>
        <Link to={"/aboutus"}>Обо мне</Link>
      </li>
      {/* <li>
        <Link to={"/reacts"}>Проекты React</Link>
      </li> */}
      <li>
        <Link to={"/works"}>Проекты</Link>
      </li>
      <li>
        <Link to={"https://www.aharenkov.ru/my-creative"}>Идеи</Link>
      </li>
      <li>
        <Link to={"/contacts"}>Контакты</Link>
      </li>
      <li>
        <Link to={"/certs"}>Дипломы</Link>
      </li>
      <li style={{ marginTop: 20 + "px" }}></li>
      <li>
        <Link to={"https://www.aharenkov.ru/auth"} className="btn lk">
          Личный кабинет
        </Link>
        <Link to="/" className="btn logout">
          Выход
        </Link>
      </li>
    </ul>
  )} else {
       return (
         <React.Fragment>
          <Box
             sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
           >
             <Link to="/">
               <p className="logo">
                 <img src={axamobile} alt="AXAcode"></img>
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
               <Link to={"/aboutus"}>Обо мне</Link>
             </MenuItem>
             {/* <MenuItem onClick={handleClose}>
             <Link href="/reacts">Проекты React</Link>
           </MenuItem> */}
             <MenuItem onClick={handleClose}>
               <Link to={"/works"}>Проекты</Link>
             </MenuItem>
             <MenuItem onClick={handleClose}>
               <Link to={"https://www.aharenkov.ru/my-creative"}>Идеи</Link>
             </MenuItem>
             <MenuItem onClick={handleClose}>
               <Link to={"/contacts"}>Контакты</Link>
             </MenuItem>
             <MenuItem onClick={handleClose}>
               <Link to={"/certs"}>Дипломы</Link>
             </MenuItem>
           </Menu>
         </React.Fragment>
       );

  }
};

export default Navbar;
