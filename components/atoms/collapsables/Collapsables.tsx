import { Collapse, ListItemButton } from "@mui/material";
import React from "react";
import Link from "next/link";

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
import { useRouter } from "next/dist/client/router";
import { Config } from "../../../utils/Config";

export const UiKitCollapsable = () => {
  const router = useRouter();
  const [openCollapsable, setOpenCollapsable] = React.useState(false);

  const handleClick = () => {
    setOpenCollapsable(!openCollapsable);
  };
  console.log(router.pathname);
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
        <List component={"div"} disablePadding>
          <Link href="/ui_kit/forms" passHref>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListAltIcon
                  color={
                    router.pathname == Config.paths.ui_kit && openCollapsable
                      ? "secondary"
                      : "inherit"
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Formularios" />
            </ListItemButton>
          </Link>
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
