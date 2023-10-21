// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import ProductState, { fetchProducts } from "../atoms/ProductState";
import { useRecoilState } from "recoil";
import Card from "./Card";
import "./products.css";

function Products() {
  const [products, setProducts] = useRecoilState(ProductState);
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  const filterProduct = (value) => {
    if (value === "all") {
      fetchProducts(setProducts);
    } else {
      const filtered = allProduct.filter(
        (product) => product.category === value
      );
      setProducts(filtered);
    }
    setSelectedCategory(value);
  };

  const searchedProducts = (query) => {
    const searched = allProduct.filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(searched);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    searchedProducts(e.target.value);
  };

  useEffect(() => {
    fetchProducts(setProducts);
    fetchProducts(setAllProduct);
    getCategory();
  }, [setProducts]);

  return (
    <>
      <div className="row">
        <div className="left-side col-md-3 d-md-inline d-none">
          <form className=" w-100" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </form>
          <h3 className="left-side__head my-1">categories</h3>

          <ul className="left-side__list list-unstyled ms-2">
            <li
              className=" d-flex justify-content-between text-capitalize my-1 align-items-center"
              onClick={() => filterProduct("all")}
            >
              All
            </li>
            {categories.map((category) => {
              return (
                <div key={category}>
                  <li
                    className="d-flex justify-content-between text-capitalize my-1 align-items-center"
                    onClick={() => filterProduct(category)}
                  >
                    {category}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="right-side col-md-9 col-12">
          <div className="select-category ">
            <div>
              <label
                className="select__label text-capitalize   ms-0 me-2"
                htmlFor="categoryName"
              >
                choose your category
              </label>
              <select
                className="p-1"
                id="categoryName"
                value={selectedCategory}
                onChange={(e) => filterProduct(e.target.value)}
              >
                <option className="text-capitalize" value="all">
                  All Products
                </option>
                {categories.map((category) => (
                  <option
                    className="text-capitalize"
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <h5 className="right-side__head my-1">
              {products.length} product is found
            </h5>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-4">
            {products.map((product) => (
              <div key={product.id} className="col">
                <Card
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
