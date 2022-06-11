import Logo from "../../components/Logo";
import NavSection from "../../components/NavSection";
import Scrollbar from "../../components/Scrollbar";
import UserIcon from "../../icons/User";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const sections = [
  {
    title: "General",
    items: [
      {
        title: "Account",
        path: "/dashboard/account",
        icon: <UserIcon fontSize="small" />,
      },
    ],
  },
];

const SidebarContent = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            p: 2,
            display: {
              lg: "none",
              xs: "flex",
            },
            justifyContent: "center",
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </RouterLink>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                "& + &": {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );
};

const DashboardSidebar = ({ openMobile, onMobileClose }) => {
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    if (openMobile) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return lgUp ? (
    <Drawer
      anchor="left"
      open
      PaperProps={{
        sx: {
          width: 280,
          top: "64px !important",
          backgroundColor: "background.paper",
          height: "calc(100% - 64px) !important",
        },
      }}
      variant="permanent"
    >
      <SidebarContent />
    </Drawer>
  ) : (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: "background.paper",
        },
      }}
      variant="temporary"
    >
      <SidebarContent />
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
