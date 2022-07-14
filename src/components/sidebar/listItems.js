import * as React from 'react';
import ListItem from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';


export const mainListItems = (
  <React.Fragment>
    <ListItem button='true' component="a" href='/profileinfo'>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile Information" />
    </ListItem>
    <ListItem button='true' component="a" href='/notification'>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItem>
    <ListItem button='true' component="a" href='/security'>
      <ListItemIcon>
        <SecurityIcon />
      </ListItemIcon>
      <ListItemText primary="Security" />
    </ListItem>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Others
    </ListSubheader>
    <ListItem button='true' component="a" href='/help'>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button='true' component="a" href='/about'>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </React.Fragment>
);