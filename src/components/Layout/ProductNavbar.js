import Logo from "../../components/Logo";
import useCart from "../../hooks/useCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, Box, Divider, Link, Toolbar } from "@mui/material";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const ProductNavbar = (props) => {
  const navigate = useNavigate();

  const { totalQuantity } = useCart();

  return (
    <AppBar
      elevation={0}
      sx={{ backgroundColor: "background.paper" }}
      {...props}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <RouterLink to="/">
          <Logo
            sx={{
              height: 40,
              width: 40,
            }}
          />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />

        <Badge
          sx={{ cursor: "pointer" }}
          badgeContent={totalQuantity}
          showZero
          color="primary"
          onClick={() => navigate("/product/payment")}
        >
          <ShoppingCartIcon color="action" />
        </Badge>

        <Link
          color="textSecondary"
          component={RouterLink}
          to="/"
          underline="none"
          variant="body1"
        />
        <Link
          color="textPrimary"
          component={RouterLink}
          to="/blog"
          underline="none"
          sx={{ mx: 2 }}
          variant="body1"
        >
          Blog
        </Link>
        <Link
          color="textSecondary"
          component={RouterLink}
          to="/contact"
          underline="none"
          variant="body1"
        >
          Contact Us
        </Link>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default ProductNavbar;
