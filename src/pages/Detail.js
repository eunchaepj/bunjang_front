import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {
    const { state } = useLocation();
    return (
        <>
            <img src={state.img} alt="그림자리" />
            <p>{state.itemName}</p>
            <p>{state.price}</p>
            <p>{state.time}</p>
        </>
    );
}
export default Detail;
