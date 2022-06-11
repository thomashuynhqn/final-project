import useCart from "../../hooks/useCart";
import productService from "../../services/productService";
import { formatCurrency } from "../../utils/";
import { Box, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "./Counter";

const AddToCart = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { handleAddToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { product } = await productService.getDetail(id);
      setProduct(product);
    })();
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 4,
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 450,
        }}
      >
        <Card sx={{ mb: 3 }}>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            height="140"
            image={product?.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Counter counter={quantity} setCounter={setQuantity} />
        <Button
          variant="contained"
          onClick={() => handleAddToCart(product, quantity)}
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>

      <Box>
        <h1>Tên: {product?.name}</h1>
        <h1>Giá: {formatCurrency(product?.price?.actual)}</h1>
        <h1>Số lượng: {quantity}</h1>
        <h1>
          Tổng cộng: {formatCurrency(quantity * Number(product?.price?.actual))}{" "}
          VNĐ
        </h1>

        <Divider />

        <Button variant="text" onClick={() => navigate("../payment")}>
          <h1>Thanh toán</h1>
        </Button>
      </Box>
    </Box>
  );
};

export default AddToCart;
