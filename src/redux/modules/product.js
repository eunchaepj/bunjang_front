import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const product_API = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529';
const initialState = {
    product: [],
    isSuccess: false,
    isLoading: false,
    error: null,
};
// createAsyncThunk 생성하기
export const getProducts = createAsyncThunk(
    // action 이름
    '/products',
    // 처리할 비동기 함수
    async (payload, thunkAPI) => {
        try {
            console.log(payload);
            const product = await axios.get(product_API);
            console.log(product.data.mockProducts);
            return thunkAPI.fulfillWithValue(product.data.mockProducts);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
            state.product = action.payload; // Store에 있는 data에 서버에서 가져온 data를 넣음
            console.log(state);
        },
    },
});
