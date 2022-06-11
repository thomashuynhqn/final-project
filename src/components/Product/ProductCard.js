import { formatCurrency } from "../../utils";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  experimentalStyled,
  Link,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const ProductCardMediaWrapper = experimentalStyled("div")({
  paddingTop: "calc(100% * 4 / 4)",
  position: "relative",
});

const ProductCard = ({ product, ...restProps }) => (
  <div {...restProps}>
    <ProductCardMediaWrapper>
      <CardMedia
        image={product.img}
        sx={{
          height: "100%",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      />
    </ProductCardMediaWrapper>
    <Box sx={{ mt: 2 }}>
      <div>
        <Chip label={product.category} variant="outlined" />
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 2,
        }}
      >
        <Box sx={{ ml: 2 }}>
          {!product.newest && (
            <Typography sx={{ textDecoration: "line-through" }} color="primary">
              Giá cũ: {formatCurrency(product.price.old)} VNĐ
            </Typography>
          )}
          {product.newest ? (
            <Typography color="secondary">
              Giá: {formatCurrency(product.price.actual)} VNĐ
            </Typography>
          ) : (
            <Typography color="secondary">
              Giá mới: {formatCurrency(product.price.actual)} VNĐ
            </Typography>
          )}
        </Box>
      </Box>
      <Link
        color="textPrimary"
        component={RouterLink}
        to={product.id}
        variant="h5"
      >
        {product.name}
      </Link>
      <Typography
        color="textSecondary"
        sx={{
          height: 72,
          mt: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
        variant="body1"
      >
        {`${product.desc.slice(0, 40)}...`}
      </Typography>

      <Button variant="contained">
        <RouterLink to={`${product.id}/add-to-cart`}>
          Thêm vào giỏ hàng
        </RouterLink>
      </Button>
    </Box>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
