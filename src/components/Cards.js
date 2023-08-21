import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getProducts } from '../redux/modules/product';

function Cards() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let products = useSelector((state) => state.product.product);
    // 리덕스에서 API에 있는 정보들 가져오기
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            {/* repeat : 5열 각 200px으로 정렬하겠다 */}
            <div
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 200px)',
                    gap: '10px',
                }}
            >
                {products.map((product) => {
                    return (
                        <Card>
                            <CardInner
                                onClick={() => {
                                    navigate('/detail', { state: product });
                                }}
                            >
                                <CardHead>
                                    <img src={product.product_image} alt="product" />
                                    <Sth />
                                </CardHead>
                                <CardContents>
                                    <ItemName>{product.name}</ItemName>
                                    <ItemContentBottom>
                                        <Price>{product.price}</Price>
                                        <Time>{product.time}</Time>
                                    </ItemContentBottom>
                                </CardContents>
                            </CardInner>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

const Card = styled.div`
    width: 196px;
    margin-right: 11px;
    margin-bottom: 11px;
    &:nth-child(5n) {
        margin-right: 0;
    }
`;
const CardInner = styled.a`
    border: 1px solid rgb(238, 238, 238);
    background: rgb(255, 255, 255);
    display: block;
`;

const CardHead = styled.div`
    position: relative;
    width: 100%;
    height: 194px;
    img {
        vertical-align: bottom;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
`;

const Sth = styled.div``;
const CardContents = styled.div`
    padding: 15px 10px;
    height: 80px;
`;
const ItemName = styled.div`
    height: 34px;
    padding-top: -10px;
    position: relative;
    font-size: 14px;
    padding-bottom: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const ItemContentBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
`;

const Price = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &::after {
        content: '원';
        font-size: 13px;
        margin-left: 3px;
    }
`;
const Time = styled.div`
    font-size: 12px;
    color: rgb(136, 136, 136);
`;

export default Cards;
