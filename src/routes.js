import DashboardLayout from "./components/Layout/DashboardLayout";
import ProductLayout from "./components/Layout/ProductLayout";
import LoadingScreen from "./components/LoadingScreen";
import Payment from "./components/Payment";
import AddToCart from "./components/Product/AddToCart";
import React, { lazy, Suspense } from "react";

const Loadable = (WrappedComponent) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <WrappedComponent {...props} />
    </Suspense>
  );

// Product Pages
const ProductDetails = Loadable(
  lazy(() => import("./pages/Product/ProductDetails"))
);
const Products = Loadable(lazy(() => import("./pages/Product/Products")));

const adminRoutes = [];
const publicRoutes = [
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "auth/login",
        element: <h1>h1</h1>,
      },
    ],
  },

  {
    path: "product",
    element: <ProductLayout />,
    children: [
      {
        path: "",
        element: <Products />,
      },
      {
        path: ":id",
        element: <ProductDetails />,
      },
      {
        path: ":id/add-to-cart",
        element: <AddToCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
];

const routes = (role) => {
  switch (role) {
    case "Admin": {
      return [...adminRoutes, ...publicRoutes];
    }

    default: {
      return publicRoutes;
    }
  }
};

export default routes;
