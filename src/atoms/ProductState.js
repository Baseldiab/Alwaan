import { atom } from "recoil";
import axios from "axios";
const ProductState = atom({
  key: "productState",
  default: [],
});
function fetchProducts(setProducts) {
  return axios.get("http://localhost:3000/products").then((res) => {
    setProducts(res.data);
  });
}

export default ProductState;
export { fetchProducts };
