import { Collapse, ListItemButton } from "@mui/material";
import React from "react";

// ICONS
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

//
import List from "@mui/material/List";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

export const UiKitCollapsable = () => {
  const [openCollapsable, setOpenCollapsable] = React.useState(false);

  const handleClick = () => {
    setOpenCollapsable(!openCollapsable);
  };

  return (
    <>
      <ListItemButton sx={{ maxHeight: "50px" }} onClick={handleClick}>
        <ListItemIcon>
          <BusinessCenterIcon color={openCollapsable ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText primary="Ui Kit" />
        {openCollapsable ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCollapsable} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Formularios" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Notificaciones" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CalendarViewDayIcon />
            </ListItemIcon>
            <ListItemText primary="Modales" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
