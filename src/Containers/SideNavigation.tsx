import { Link } from 'react-router-dom';
import {
  navigation,
} from '../Utils/constantData';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import Images from '../Utils/images';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

interface Props {
  containerRef?: any | null;
}

export default function SideNavigation({ containerRef }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action: string) => {
    if (action === 'logout') {
      
    }
    setAnchorEl(null);
  };



  
  return (
    <div className="navigation">
     

      <div className="mobile_info">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <div className="userDropdown">
            <Avatar
              className="avatar"
              alt={""}
              src={
               Images.USER_IMAGE
              }
            />
            <div className="info">
              <h4>
                name
              </h4>
              <p>name@gmail.com</p>
            </div>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
        </Button>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'user-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose('');
            }}
          >
           Profile
          </MenuItem>
          {/* <MenuItem onClick={() => handleClose('')}>My account</MenuItem> */}
          <MenuItem onClick={() => {}}>Logout</MenuItem>
        </Menu>
      </div>
  
      <ul>
        {navigation.map((values, index: number) => (
          <li key={index}>
            <Link
              title={values.name}
              to={values.path[0]}
              onClick={e => {
                const container = document.getElementById('main_container');
                if (container) container.scrollTop = 0;
                e.currentTarget.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
                });
              }}
           
              aria-label={`Navigate to ${values.name} page`}
            >
              <img
                src={
                  values.icon
                }
                alt={""}
                role="presentation"
               
              />
              
                {values.name}
              
            </Link>
          </li>
        ))}
      </ul>

     
    </div>
  );
}
