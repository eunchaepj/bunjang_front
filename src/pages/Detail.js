import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/modules/product';

function Detail() {
    let dispatch = useDispatch();
    let products = useSelector((state) => state.product.product);
    // 리덕스에서 API에 있는 정보들 가져오기
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    const { state } = useLocation();
    return (
        <>
            <img src={state.product_image} alt="그림자리" />
            <p>{state.name}</p>
            <p>{state.price}</p>
            <p>{state.time}</p>
        </>
    );
}
export default Detail;
