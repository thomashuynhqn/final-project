import { ProductComment, ProductNewsletter } from "../../components/Product";
import productService from "../../services/productService";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink, useParams } from "react-router-dom";

const comments = [
  {
    id: "d0ab3d02ef737fa6b007e35d",
    authorAvatar: "/static/mock-images/avatars/avatar-alcides_antonio.png",
    authorName: "Alcides Antonio",
    authorRole: "Product Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: new Date().getTime(),
    isLiked: true,
    likes: 12,
  },
  {
    id: "3ac1e17289e38a84108efdf3",
    authorAvatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    authorName: "Jie Yan Song",
    authorRole: "Web Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    createdAt: new Date().getTime(),
    isLiked: false,
    likes: 8,
  },
];

const obj = {
  id: "621256f07d9a5c27f1ac6081",
  name: "Máy bay điện tử cảm ứng",
  img: "https://quachobe.vn/wp-content/uploads/2020/05/m%C3%A1y-bay-t%E1%BB%B1-%C4%91%E1%BB%99ng.jpg",
  colors: ["Xanh"],
  price: { actual: 399000 },
  newest: true,
  category: "Đồ chơi trẻ em",
  desc: "100% nhãn hiệu mới chất lượng cao. Bên Cảm Biến: Cảm Biến được cài đặt xung quanh máy bay điều khiển lái chuyến bay Linh hoạt rào cản: sử dụng ban đầu chất liệu ABS, mạnh mẽ và bền Cao cấp xuất hiện: UV phun quá trình, kết cấu chắc chắc, không sơn Xây dựng trong đèn LED, mở trên bầu trời đêm, tăng thêm sự thích thú của chuyến bay đêm Pin Lithium và dây sạc USB có chức năng ngắt điện bảo vệ. Khi pin được sạc đầy, nó sẽ tự động cắt điện để bảo vệ tốt hơn pin. Đáy Cảm Biến Hồng Ngoại: có cảm biến ở phía dưới của máy bay, sẽ bay rất cao khi gặp chướng ngại vật. Khi chướng ngại vật dưới evacuates, máy bay xuống. Máy có chức năng khóa bảo vệ, sẽ tự động dừng lại trong tác động quá trình để bảo vệ lưỡi và động cơ từ thiệt hại.",
};

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { product } = await productService.getDetail(id);
      setProduct(product);
    })();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          minHeight: "100%",
        }}
      >
        <div>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ py: 2 }}>
              <Grid
                alignItems="center"
                container
                justifyContent="space-between"
                spacing={3}
              >
                <Grid item>
                  <Typography color="textPrimary" variant="body2">
                    Hello, Jane Rotanson
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    component={RouterLink}
                    to="add-to-cart"
                    variant="contained"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </div>
        <Divider />

        <Box sx={{ py: 3 }}>
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Chip label={product?.category} variant="outlined" />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              sx={{
                fontWeight: "fontWeightBold",
                mt: 3,
              }}
              variant="h2"
            >
              {product?.name}
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              sx={{ mt: 3 }}
              variant="subtitle1"
            >
              {product?.desc}
            </Typography>
          </Container>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundImage: `url(${product?.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "20px",
                height: 600,
              }}
            />
          </Container>
        </Box>
        <div>
          <Container maxWidth="lg">
            <Typography color="textPrimary" variant="h6">
              {`Comments (${comments.length})`}
            </Typography>
            <Box sx={{ mt: 3 }}>
              {comments.map((comment) => (
                <ProductComment key={comment.id} {...comment} />
              ))}
            </Box>
          </Container>
        </div>
        <ProductNewsletter />
      </Box>
    </>
  );
};

export default ProductDetails;
