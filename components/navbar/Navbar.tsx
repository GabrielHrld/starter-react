import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import CollapsableProfileMenu from "../collapsables/CollapsableProfileMenu";
import MobileNavbarMenu from "../MobileNavbarMenu";
import LogoContainer from "../logos/LogoContainer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

//  REDUX
import { connect } from "react-redux";
import { InitialState } from "../../utils/interfaces/context/InitialState";
import { handleSideMenuAction } from "../../context/actions/index";

import { styled } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",

  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props {
  sideMenuState: boolean;
  open?: boolean;
  handleSideMenuAction: () => never;
}

const Navbar: React.FC<Props> = ({
  sideMenuState,
  handleSideMenuAction,
  open,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSideMenu = () => handleSideMenuAction();

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box>
      <AppBar position="fixed" open={sideMenuState}>
        <Toolbar>
          <LogoContainer to="/" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideMenu}
            edge="start"
            sx={{ ml: 2 }}
          >
            {sideMenuState ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileNavbarMenu
        anchorEl={mobileMoreAnchorEl}
        id={mobileMenuId}
        open={isMobileMenuOpen}
        onClick={handleMobileMenuClose}
        onClickSubMenu={handleProfileMenuOpen}
      />
      <CollapsableProfileMenu
        id={menuId}
        open={isMenuOpen}
        onClick={handleMenuClose}
        anchorEl={anchorEl}
        item1text={"Profile"}
        item2text={"My account"}
      />
    </Box>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    sideMenuState: state.sideMenuState,
  };
};

const mapDispatchToProps = {
  handleSideMenuAction,
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
