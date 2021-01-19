import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className='header'>
            <div className="header_left">
            <img src="data:image/png;base64,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"
              alt=''/>
             <div className="header_input">
                 <SearchIcon />
                 <input placeholder='Search Facebook' type="text" />
             </div>
             </div>
            <div className='header_center'>
            <div className="header_option 
            header_option_active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header_option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header_option">
                <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header_option">
                <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
            </div>
            <div className='header_right'>
            <div className='header_info'>
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
            <IconButton >
                <AddIcon />
            </IconButton>
            <IconButton >
                <ForumIcon />
            </IconButton>
            <IconButton >
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton >
                <ExpandMoreIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Header
