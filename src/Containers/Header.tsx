import { MouseEvent, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {

} from '../Components';
import { useDTranslation } from '../customHooks';
import Images from '../Utils/images';




export default function Header({ route }: any): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const t = useDTranslation('header');
  const tC = useDTranslation('Common');




  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  



  return (
    <>
     
      <header className="header">
       
          <div className="toggle_menu">
            <IconButton
            
            >
              <img src={Images.TOGGLE_MENU_IC} alt="" />
            </IconButton>
          </div>
        
        <div
          className={`logo ${
            // userData &&
            // userData.formNextStep !== FORM_STEPS.BILLING_DETAILS &&
            'no_cursor'
          }`}
          // onClick={() => {
          //   status ? navigate(ROUTES.DASHBOARD) : navigate(ROUTES.LOGIN);
          // }}
        >
          <a
            href=""
          >
            <img src={Images.LOGO} alt={""} />
          </a>
        </div>
       <div className="selectBranchWeb"></div>
          <>
            
            <div className="authAction">
              
              <div
                className={`user_action `}
              >
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <div className="userDropdown">
                    {/* <Avatar
                className="avatar"
                alt="User name"
                src={DefaultProfileImg}
              /> */}
                    {/* IN CASE OF NO IMAGE AVAULABLE */}
                    {/* <Avatar>H</Avatar> */}
                    <div className="info">
                      <h4>
                        first name
                        last name
                      </h4>
                      <p>user@email.com</p>
                    </div>
                    {open ? (
                      <img
                        src={Images.ARROW_DOWN}
                        alt={""}
                        className="rotate_180"
                      />
                    ) : (
                      <img src={Images.ARROW_DOWN} alt={""} />
                    )}
                  </div>
                </Button>
                {open && (
                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    className="profile_dropdown"
                    MenuListProps={{
                      'aria-labelledby': 'user-button',
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: -25,
                      horizontal: 'right',
                    }}
                  >
                   
                        <MenuItem
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          {t('Profile')}
                        </MenuItem>
                      
                    {/* <MenuItem onClick={() => handleClose('')}>My account</MenuItem> */}
                    <MenuItem onClick={() =>{}}>
                      {t('logout')}
                    </MenuItem>
                  </Menu>
                )}
              </div>
              
                <div className="mobile_menu">
                  <IconButton
                    color="primary"
                    onClick={() => { }}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
              
            </div>
          </>
      
      </header>

    </>
  );
}
