import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { CgSearch } from 'react-icons/cg';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BrowsePopover from './BrowsePopover';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBrowsePopup, setShowBrowsePopup] = useState(false);
  const [browseAnchorEl, setBrowseAnchorEl] = React.useState(null);

  const menuOptions = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <InfoIcon /> },
    { text: 'Testimonials', icon: <CommentRoundedIcon /> },
    { text: 'Contact', icon: <PhoneRoundedIcon /> },
    { text: 'Cart', icon: <ShoppingCartRoundedIcon /> },
    { text: 'Admin Dashboard', icon: <AccountCircleIcon />, link: '/AdminDashboard' },
  ];

  const handleOpenBrowsePopover = (event) => {
    setBrowseAnchorEl(event.currentTarget);
    setShowBrowsePopup(true);
  };

  return (
    <>
      <nav>
        <div className="navbar-links-container">
          <a href="AdminDashboard">AdminDashboard</a>
          <a href="">Home</a>
          <a href="#about">About</a>
          <a
            aria-describedby="simple-popover"
            onMouseEnter={handleOpenBrowsePopover}
            onClick={handleOpenBrowsePopover}
          >
            Browse
          </a>
          <Link to="/login">Login</Link>
          <a href="">
            <BsCart2 className="navbar-cart-icon" />
          </a>
          <Link to="/checkout">
            <button className="primary-button">Premium</button>
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <CgSearch />
          </div>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      <BrowsePopover
        setShowPopOver={setShowBrowsePopup}
        showPopOver={showBrowsePopup}
        anchorEl={browseAnchorEl}
        setAnchorEl={setBrowseAnchorEl}
      />
    </>
  );
};

export default Navbar;
