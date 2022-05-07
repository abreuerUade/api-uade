import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import Security from '../../pages/settings/Security';

export const mainListItems = (
  <React.Fragment>
    <ListItem Button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile Information" />
    </ListItem>
    <ListItem Button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItem>
    <ListItem Button onClick={()=>(<Security/>)}>
      <ListItemIcon>
        <SecurityIcon />
      </ListItemIcon>
      <ListItemText primary="Security" />
    </ListItem>
    <ListItem Button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My recipes" />
    </ListItem>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Others
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>
  </React.Fragment>
);