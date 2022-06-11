import ProductCard from "../../components/Product/ProductCard";
import SearchIcon from "../../icons/Search";
import SortAscendingIcon from "../../icons/SortAscending";
import SortDescendingIcon from "../../icons/SortDescending";
import productService from "../../services/productService";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const sortOptions = [
  {
    label: "Tăng dần",
    value: "asc",
    icon: SortAscendingIcon,
  },
  {
    label: "Giảm dần",
    value: "desc",
    icon: SortDescendingIcon,
  },
];

// const temp = {
//     category: "Đồ chơi trẻ em"
// colors: ['Xanh']
// desc: "100% nhãn hiệu mới chất lượng cao. Bên Cảm Biến: Cảm Biến được cài đặt xung quanh máy bay điều khiển lái chuyến bay Linh hoạt rào cản: sử dụng ban đầu chất liệu ABS, mạnh mẽ và bền Cao cấp xuất hiện: UV phun quá trình, kết cấu chắc chắc, không sơn Xây dựng trong đèn LED, mở trên bầu trời đêm, tăng thêm sự thích thú của chuyến bay đêm Pin Lithium và dây sạc USB có chức năng ngắt điện bảo vệ. Khi pin được sạc đầy, nó sẽ tự động cắt điện để bảo vệ tốt hơn pin. Đáy Cảm Biến Hồng Ngoại: có cảm biến ở phía dưới của máy bay, sẽ bay rất cao khi gặp chướng ngại vật. Khi chướng ngại vật dưới evacuates, máy bay xuống. Máy có chức năng khóa bảo vệ, sẽ tự động dừng lại trong tác động quá trình để bảo vệ lưỡi và động cơ từ thiệt hại."
// id: "621256f07d9a5c27f1ac6081"
// img: "https://quachobe.vn/wp-content/uploads/2020/05/m%C3%A1y-bay-t%E1%BB%B1-%C4%91%E1%BB%99ng.jpg"
// name: "Máy bay điện tử cảm ứng"
// newest: true
// price: {actual: 399000}
// }

const Products = () => {
  const sortRef = useRef(null);
  const [searchTerms, setSearchTerms] = useState("");
  const [openSort, setOpenSort] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [sortOption, setSortOption] = useState(sortOptions[0]);

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setOpenSort(false);
  };

  const { icon: SortOptionIcon } = sortOption;

  useEffect(() => {
    (async () => {
      const { products } = await productService.getAll();
      setProducts(products);
    })();
  }, []);

  useEffect(() => {
    setProductsFiltered(
      products
        .filter(
          ({ name, category }) =>
            name.toLowerCase().includes(searchTerms.toLowerCase()) ||
            category.toLowerCase().includes(searchTerms.toLowerCase())
        )
        .sort((x, y) =>
          sortOption.value === "asc"
            ? x.price.actual - y.price.actual
            : y.price.actual - x.price.actual
        )
    );
  }, [products, searchTerms, sortOption]);

  return (
    <>
      <Helmet>
        <title>Products</title>
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
              </Grid>
            </Toolbar>
          </Container>
        </div>
        <Divider />
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: 500 }}>
                <TextField
                  value={searchTerms}
                  onChange={(event) => setSearchTerms(event.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  placeholder="Search posts"
                  variant="outlined"
                />
              </Box>
              <Button
                color="primary"
                onClick={handleSortOpen}
                ref={sortRef}
                size="small"
                startIcon={<SortOptionIcon fontSize="small" />}
                variant="text"
              >
                {sortOption.label}
              </Button>
              <Menu
                anchorEl={sortRef.current}
                keepMounted
                onClose={handleSortClose}
                open={openSort}
                PaperProps={{
                  sx: { width: 200 },
                }}
              >
                {sortOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    onClick={() => handleSortChange(option)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Grid container spacing={6}>
                {productsFiltered.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Products;
