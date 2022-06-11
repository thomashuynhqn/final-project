import useLanguage from "../hooks/useLanguage";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Flag from "react-flagkit";

const LanguagePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { t, language, languages, handleLanguageChange } = useLanguage();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [language]);

  return (
    <>
      <Tooltip title={t("text.changeLanguage")}>
        <IconButton onClick={handleOpen} ref={anchorRef}>
          <Flag country={language.flag} />
        </IconButton>
      </Tooltip>

      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 180 },
        }}
      >
        {languages.map((language) => (
          <MenuItem
            onClick={() => handleLanguageChange(language)}
            key={language.locale}
          >
            <ListItemIcon>
              <Flag country={language.flag} />
            </ListItemIcon>
            <ListItemText>
              <Typography>{language.label}</Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
