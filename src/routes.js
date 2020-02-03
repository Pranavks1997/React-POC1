export const routes = {
    home: { new: "/home" },
    products: { new: "/products",view: (productID) => `/products/${productID}` }
  };
  