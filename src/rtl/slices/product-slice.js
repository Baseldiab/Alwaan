import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts: (state, action) => {
      const category = action.payload;
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setProducts, setCategories, filterProducts, searchProducts } =
  productSlice.actions;

export default productSlice.reducer;
