import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography, } from '@mui/material';

import { orange } from '@mui/material/colors';
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon,
  Logout as LogoutIcon, NotificationAdd as NotificationIcon, 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import SearchdDailog from '../specfic/Search'
// import Notifications from "../specfic/Notifications"


const Header = () => {
 const SearchDailog = React.lazy(()=> import("../specfic/Search"))
 const Notifications = React.lazy(()=> import("../specfic/Notifications"))
 const NewGroup = React.lazy(()=> import("../specfic/NewGroup"))
  const navigate = useNavigate()
  const [isMobile, setMobile] = useState(false);
  const [isSearch, setisSearch] = useState(false)
  const [isNewGroup, setisNewGroup]= useState(false)
  const [isNotification, setisNotifications]= useState(false)


  const handleMobile = () => {
    setMobile((prev) => !prev)
   
  }
  const openSerch = () => {
    setisSearch((prev) => !prev)
  }
  const openNewGroup = () => {
    setisNewGroup((prev)=> !prev)
  }
  const openNotifications = () => {
    setisNotifications((prev)=> !prev)
  }
  const NavigatetoGroup = () => navigate("/group");

  const logoutHandler = () => {
    console.log("logout")
  }
  return (

    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{ bgcolor: orange }} >
          <Toolbar>
            <Typography variant='h6' sx={{ display: { xs: 'none', sm: "block", } }}>Chat App</Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <Iconbtn title={'Search'}
                icon={<SearchIcon />}
                onClick={openSerch} />

              <Iconbtn title={'Manage Groups'}
                icon={<GroupIcon />}
                onClick={NavigatetoGroup} />
                  
                  <Iconbtn title={'Notifications'}
                icon={<NotificationIcon />}
                onClick={openNotifications} />

              <Iconbtn title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup} />
              <Iconbtn title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {
        isSearch && 
          <Suspense fallback={<Backdrop open/>} > 
          <SearchdDailog/> 
          </Suspense>
}
{
        isNotification && 
        <Suspense fallback={<Backdrop open/>} > 
          <Notifications/> 
          </Suspense>
}
{
        isNewGroup && 
        <Suspense fallback={<Backdrop open/>} > 
          <NewGroup/> 
          </Suspense>
}
      
    </>
  )
}

const Iconbtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}
export default Header