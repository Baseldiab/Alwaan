import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    filteredProducts: [],
    searchedProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts: (state, action) => {
      const category = action.payload;
      //   console.log(action);
      if (category) {
        const filtered = state.filteredProducts.filter(
          (product) => product.category === category
        );
        state.products = filtered;
      }
    },

    searchProducts: (state, action) => {
      const query = action.payload;
      state.products = state.filteredProducts.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload; // Update the state with fetched products
      state.filteredProducts = action.payload; // Set filteredProducts to initial fetched products
    });
  },
});

export const { setProducts, setCategories, filterProducts, searchProducts } =
  productSlice.actions;

export default productSlice.reducer;