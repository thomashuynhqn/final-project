import LanguagePopover from "../../components/LanguagePopover";
import Logo from "../../components/Logo";
import MenuIcon from "../../icons/Menu";
import {
  AppBar,
  Box,
  experimentalStyled,
  IconButton,
  Toolbar,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === "light" && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === "dark" && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
  zIndex: theme.zIndex.appBar,
}));

const DashboardNavbar = ({ onSidebarMobileOpen, ...restProps }) => (
  <DashboardNavbarRoot {...restProps}>
    <Toolbar sx={{ minHeight: 64 }}>
      <IconButton
        color="inherit"
        onClick={onSidebarMobileOpen}
        sx={{
          display: {
            lg: "none",
          },
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <RouterLink to="/">
        <Logo
          sx={{
            display: {
              lg: "inline",
              xs: "none",
            },
            height: 40,
            width: 40,
          }}
        />
      </RouterLink>
      <Box
        sx={{
          flexGrow: 1,
          ml: 2,
        }}
      />
      <LanguagePopover />
    </Toolbar>
  </DashboardNavbarRoot>
);

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

DashboardNavbar.defaultProps = {
  onSidebarMobileOpen: () => {},
};

export default DashboardNavbar;
