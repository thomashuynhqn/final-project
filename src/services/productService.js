import queryString from "query-string";
import axiosClient from "./axiosClient";

const productService = {
  getDetail: (id) => {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },

  getAll: (filter) => {
    const url = "product";
    return axiosClient.get(`${url}?${queryString.stringify(filter)}`);
  },

  getNewest: () => {
    const url = "product/newest";
    return axiosClient.get(url);
  },

  getRelated: (category) => {
    const url = `product/related`;
    return axiosClient.get(`${url}?${queryString.stringify({ category })}`);
  },
};

export default productService;
// RESTful APIs
// GraphQL - TypeScript - MongoDB
