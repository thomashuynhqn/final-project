import Footer from "../../components/Footer";
import { experimentalStyled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";

const ProductLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

const ProductLayout = () => (
  <ProductLayoutRoot>
    <ProductNavbar />
    <Outlet />
    <Footer />
  </ProductLayoutRoot>
);

export default ProductLayout;
