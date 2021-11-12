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
import TimelineIcon from "@mui/icons-material/Timeline";

//
import List from "@mui/material/List";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useRouter } from "next/dist/client/router";
import { Config } from "../../utils/Config";

export const UiKitCollapsable = () => {
  const router = useRouter();
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
        <List component={"div"} disablePadding>
          <Link href="/ui_kit/forms" passHref>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListAltIcon
                  color={
                    router.pathname.includes("forms") && openCollapsable
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
          <Link href="/ui_kit/buttons" passHref>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Botones" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/ui_kit/charts" passHref>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Gráficos" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </>
  );
};
