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
const ProductContentWrapper = styled.div`
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
const ProductTop = styled.div`
    display: flex;
    padding: 30px 0px;
`;
const ProductImageWrapper = styled.div`
    margin-right: 40px;
    flex-shrink: 0;
    width: 430px;
    height: 430px;
`;
const ProductImageBox = styled.div`
    border: 1px solid rgb(238, 238, 238);
    position: relative;
    width: 100%;
    height: 100%;
`;
const ProductImage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img {
        width: 100%;
        position: absolute;
        transition: opacity 0.2s ease-in-out 0s;
        opacity: 1;
        object-fit: cover;
        vertical-align: bottom;
        border-style: none;
    }
`;
const NextButton = styled.button`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(33, 33, 33, 0.35);
    display: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    right: 20px;
`;
const LookButton = styled.button`
    border-radius: 14px;
    padding: 6px 12px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(33, 33, 33, 0.35);
    display: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    img {
        margin-right: 5px;
    }
`;
const DotBox = styled.div`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;
const FirstDot = styled.button`
    width: 10px;
    height: 10px;
    opacity: 0.6;
    border-radius: 50%;
    margin-right: 10px;
    background: rgb(33, 33, 33);
    border: 0px;
`;
const OtherDot = styled.button`
    width: 10px;
    height: 10px;
    opacity: 0.6;
    border: 1px solid rgb(136, 136, 136);
    border-radius: 50%;
    margin-right: 10px;
`;
const WapperContainor = styled.div`
    -webkit-box-flex: 1;
    flex-grow: 1;
`;
const Wapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const Main = styled.div`
    ::before, ::after {
    box-sizing: border-box;
`;
const Basic = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
`;
const Name = styled.div`
    font-size: 24px;
    margin-bottom: 25px;
    font-weight: 600;
    line-height: 1.4;
`;
const PriceWapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
`;
const Price = styled.div`
    font-size: 40px;
    font-weight: 500;
    span {
        font-size: 28px;
        font-weight: 400;
        margin-left: 5px;
    }
`;
const TooltipArea = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`;
const IconBadge = styled.img`
    display: inline-block;
    height: 28px;
`;
const ProductDetail = styled.div`
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
const StatusWrapper = styled.div`
    height: 30px;
    margin-top: 15px;
    margin-bottom: 25px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const StatusGroup = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const Status = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(204, 204, 204);
    font-size: 16px;
    height: 100%;
    img {
        margin-right: 5px;
        vertical-align: bottom;
        border-style: none;
    }
`;
const StatusValue = styled.div`
    color: rgb(204, 204, 204);
`;
const ReportButton = styled.button`
    color: rgb(204, 204, 204);
    font-size: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    img {
        margin-right: 5px;
        vertical-align: bottom;
    }
`;
const DetailInfo = styled.div`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
const Row = styled.div`
    display: flex;
    margin-bottom: 25px;
`;
const Label = styled.div`
    position: relative;
    width: 90px;
    padding-left: 15px;
    color: rgb(153, 153, 153);
`;
const Value = styled.div`
    position: relative;
    display: flex;
    img {
        position: absolute;
        top: 0px;
        left: 0px;
        vertical-align: bottom;
        border-style: none;
    }
`;
const Buttons = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    > * {
        flex: 1 1 0%;
        font-weight: 600;
        margin-right: 10px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        height: 56px;
        font-size: 18px;
        -webkit-box-align: center;
        align-items: center;
    }
    > :last-child {
        margin-right: 0px;
    }
`;
const FavoriteButtonWapper = styled.div`
    position: relative;
`;
const FavoriteButton = styled.button`
    width: 100%;
    height: 100%;
    font-weight: 600;
    background: rgb(204, 204, 204);
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    span {
        margin-left: 5px;
    }
`;
const FavoriteTooltip = styled.div`
    position: absolute;
    bottom: -50px;
    left: 0px;
    width: 100%;
    border: 1px solid rgb(51, 51, 51);
    font-size: 14px;
    height: 38px;
    display: none;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 500;
    img {
        margin-right: 6px;
    }
    span {
        margin-right: 4px;
        color: rgb(247, 47, 51);
    }
`;
const ContactButton = styled.button`
    background: rgb(255, 164, 37);
    border: 1px solid rgb(243, 150, 20);
    color: rgb(255, 255, 255);
    font-weight: 700;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
`;
const BuyButton = styled.div`
    background: rgb(247, 0, 0);
    border: 1px solid rgb(223, 0, 0);
    color: rgb(255, 255, 255);
`;

export default Detail;
