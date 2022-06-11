import useCart from "../hooks/useCart";
import { formatCurrency } from "../utils/";
import { Box, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const Payment = () => {
  const { products, totalQuantity, totalPrice } = useCart();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Typography sx={{ mb: 4 }} variant="h3">
          Thanh toán đơn hàng
        </Typography>

        <Divider />

        {totalQuantity ? (
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {products.map(({ product, quantity }, index) => (
              <>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={index}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={product.img} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ mr: 4 }}
                    primary={product.name}
                    secondary={`${product.desc.slice(0, 60)}...`}
                  />
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary={`${formatCurrency(
                      product.price.actual
                    )} x ${quantity}`}
                    secondary={
                      <Typography
                        sx={{
                          borderTop: "1px solid #ccc",
                        }}
                      >{`${formatCurrency(
                        product.price.actual * quantity
                      )}`}</Typography>
                    }
                  />
                </ListItem>
                <Divider />
              </>
            ))}

            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              alignItems="flex-start"
            >
              <ListItemAvatar />
              <ListItemText
                primary={<Typography variant="h3">Tổng tiền</Typography>}
              />
              <ListItemText
                sx={{ textAlign: "right" }}
                primary={formatCurrency(totalPrice)}
              />
            </ListItem>
          </List>
        ) : (
          <Typography>Bạn chưa có sản phẩm nào, vui lòng...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Payment;
