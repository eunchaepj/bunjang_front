import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './modules/product';
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
});

export default store;
