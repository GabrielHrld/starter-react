import React from "react";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface Props extends Partial<React.FunctionComponent> {
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  id: string | undefined;
  open: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement> | undefined | (() => void);
  onClickSubMenu:
    | React.MouseEventHandler<HTMLLIElement>
    | undefined
    | (() => void);
}

const MobileNavbarMenu: React.FC<Props> = ({
  children,
  anchorEl,
  id,
  open,
  onClick,
  onClickSubMenu,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={id}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={onClick}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={onClickSubMenu}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      {children}
    </Menu>
  );
};

export default MobileNavbarMenu;
