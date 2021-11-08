import React, { ReactChildren } from "react";
import { Menu, MenuItem } from "@mui/material";

interface Props extends Partial<React.FunctionComponent> {
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  id: string | undefined;
  open: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement> | undefined | (() => void);
  item1text: string;
  item2text: string;
  children?: ReactChildren;
}

const CollapsableProfileMenu: React.FC<Props> = ({
  children,
  anchorEl,
  id,
  open,
  onClick,
  item1text,
  item2text,
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
      <MenuItem onClick={onClick}>{item1text}</MenuItem>
      <MenuItem onClick={onClick}>{item2text}</MenuItem>
      {children}
    </Menu>
  );
};

export default CollapsableProfileMenu;
