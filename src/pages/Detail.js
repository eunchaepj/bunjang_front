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
            <div>
                <ProductPageTop>
                    <ProductPage>
                        <CategoryNavigationWrapper>
                            <CategoryNavigation>
                                <Home>
                                    <img
                                        src="https://m.bunjang.co.kr/pc-static/resource/f1f8a93028f0f6305a87.png"
                                        width="15"
                                        height="15"
                                        alt="홈 아이콘"
                                    />
                                    홈
                                </Home>
                                <CategorySelectorGroup>
                                    <img
                                        src="https://m.bunjang.co.kr/pc-static/resource/c5ce9d5a172b0744e630.png"
                                        width="6"
                                        height="10"
                                        alt="카테고리 선택 아이콘"
                                    />
                                    <CategorySelectorWrapper></CategorySelectorWrapper>
                                </CategorySelectorGroup>
                            </CategoryNavigation>
                        </CategoryNavigationWrapper>
                    </ProductPage>
                </ProductPageTop>
            </div>
            {/* <img src={state.product_image} alt="그림자리" />
            <p>{state.name}</p>
            <p>{state.price}</p>
            <p>{state.time}</p> */}
        </>
    );
}
const ProductPageTop = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
const ProductPage = styled.div`
    width: 1024px;
`;
const CategoryNavigationWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px 0px 20px;
    height: 78px;
    border-bottom: 1px solid rgb(63, 63, 63);
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
const CategoryNavigation = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const Home = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    font-size: 12px;
    img {
        margin-right: 5px;
        vertical-align: bottom;
        border-style: none;
    }
`;
const CategorySelectorGroup = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    > img {
        margin: 0px 10px;
    }
    img {
        vertical-align: bottom;
        border-style: none;
    }
`;
const CategorySelectorWrapper = styled.div`
    width: 154px;
`;

const CategorySelector = styled.div`
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    width: 100%;
    height: 28px;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    font-size: 12px;
    color: rgb(77, 77, 77);
    background: rgb(255, 255, 255);
`;
const CategorySelectorInner = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 25px 0px 10px;
    position: relative;
    width: 100%;
    img {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`;
const Category = styled.div`
    position: absolute;
    top: 27px;
    left: -1px;
    width: calc(100% + 2px);
    background: rgb(255, 255, 255);
    max-height: 280px;
    overflow-y: auto;
    z-index: 3;
    border-left: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    border-right: 1px solid rgb(238, 238, 238);
    display: none;
    a {
        width: 100%;
        height: 28px;
        padding: 0px 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(33, 33, 33);
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
    }
`;
export default Detail;
