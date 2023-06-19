import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
    let navigate = new useNavigate();
    let logoURL =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAxMzYgNDAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBmaWxsPSIjRDgwQzE4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjc1MSAxNC44TDUuOTY3IDMxLjc1NmMtLjEwMi4xMS0uMjg2LjAyNS0uMjY3LS4xMjVsMS43Ni0xNC4zNjNILjE1NmMtLjEzNiAwLS4yMDctLjE2Mi0uMTE0LS4yNjJMMTUuODI2LjA1Yy4xMDMtLjExLjI4Ni0uMDI1LjI2OC4xMjVsLTEuNzYgMTQuMzYzaDcuMzAzYy4xMzYgMCAuMjA3LjE2Mi4xMTQuMjYyTTc5LjQgMi41NTVWMjkuNjVoLTQuMDNWMTYuMTMyaC0yLjZ2MTMuMDA0SDY4LjhWMi43MDVoMy45NzF2OS4zMjRoMi42VjIuNTU1aDQuMDN6TTk0LjcgMTguNDU4Yy43NTcgMCAxLjQ5My4wMDUgMi4yMS4wMTUuNzE0LjAxMiAxLjM0NC4wMzYgMS44OS4wNzUgMi4yNTcuMTM4IDQuMDA3LjY1IDUuMjQ2IDEuNTMzIDEuMjQuODgyIDEuODYgMi4yMDcgMS44NiAzLjk3M3MtLjYyIDMuMDg2LTEuODYgMy45NmMtMS4yNC44NzItMi45OSAxLjM4OC01LjI0NyAxLjU0OC0uNTI1LjAzOS0xLjE0NS4wNjMtMS44Ni4wNzMtLjcxNy4wMS0xLjQ1OC4wMTQtMi4yMjMuMDE0LS43NjcgMC0xLjUwOC0uMDA1LTIuMjI0LS4wMTQtLjcxNS0uMDEtMS4zMzUtLjAzNC0xLjg2LS4wNzMtMi4yNTgtLjE2LTQuMDA3LS42NzYtNS4yNDgtMS41NDgtMS4yNC0uODc0LTEuODYtMi4xOTQtMS44Ni0zLjk2cy42Mi0zLjA4NCAxLjg2LTMuOTU4YzEuMjQxLS44NzIgMi45OS0xLjM4OCA1LjI0OC0xLjU0OC41MjUtLjAyIDEuMTQ1LS4wMzkgMS44Ni0uMDYuNzE2LS4wMiAxLjQ1Mi0uMDMgMi4yMDgtLjAzek0xMzMgMi41NTVWMjkuNjVoLTQuMTIzVjE2LjM0M2gtNC4xMjN2LTMuOTIxaDQuMTIzVjIuNTU1SDEzM3ptLTk4LjE1NSAxNy42N3Y1LjE4NWgxNi44NzN2My42NUgzMC41MTN2LTguODM1aDQuMzMyem0zMi4xODctMTcuMDhjLS4yNDQgMi43MjgtLjY1NiA1LjI2OC0xLjIzNyA3LjYxOS0uNTggMi4zNS0xLjI2NyA0LjU0NS0yLjA2MSA2LjU4LS43OTUgMi4wMzktMS42NyAzLjkyNS0yLjYyNyA1LjY2Ny0uOTU4IDEuNzQtMS45MzQgMy4zNjMtMi45MzIgNC44NzFsLTMuNTEyLTIuMTdjLjk1Ni0xLjM2MSAxLjg1My0yLjgwMyAyLjY4OC00LjMxOS44MzQtMS41MTggMS41ODMtMy4wNzkgMi4yNDQtNC42OS42NjEtMS42MDcgMS4yMzItMy4yMzUgMS43MS00Ljg4NS40NzktMS42NDguODQtMy4yNzggMS4wODUtNC44ODZoLTYuOTYzVjMuMTQ0em01Ny4xNjEgMHYzLjczNGgtOS4zNDh2NS44NDFoOC42OTN2My42MTVoLTguNjkzdjcuMDc0bDEyLjI2NS0uNDh2My41NTNsLTE2LjQ5Mi44MTFWMy4xNDRoMTMuNTc1ek05NC43MTUgMjEuOTdjLS42ODYgMC0xLjM1Ni4wMS0yLjAxMi4wMjktLjY1NS4wMjItMS4yMzUuMDUtMS43NC4wOS0xLjAyNy4wOTktMS43NjguMzE3LTIuMjIyLjY1Ni0uNDU0LjMzNi0uNjguNzczLS42OCAxLjMwOCAwIC41MzguMjI2Ljk3My42OCAxLjMxLjQ1NC4zMzcgMS4xOTUuNTU1IDIuMjIyLjY1NC41MDUuMDQxIDEuMDg1LjA3IDEuNzQuMDkuNjU2LjAyIDEuMzI2LjAyOSAyLjAxMi4wMjkuNjg1IDAgMS4zNTUtLjAxIDIuMDExLS4wMjkuNjU1LS4wMiAxLjIzNC0uMDQ5IDEuNzM5LS4wOSAxLjAyOS0uMSAxLjc3LS4zMTcgMi4yMjQtLjY1NC40NTMtLjMzNy42OC0uNzcyLjY4LTEuMzEgMC0uNTM1LS4yMjctLjk3Mi0uNjgtMS4zMDgtLjQ1NC0uMzQtMS4xOTUtLjU1Ny0yLjIyNC0uNjU3LS41MDUtLjAzOC0xLjA4NC0uMDY3LTEuNzM5LS4wOS0uNjU2LS4wMTktMS4zMjYtLjAyOC0yLjAxMS0uMDI4ek01MS43MTggMi41NTV2MTkuNDM3aC00LjI1OXYtOS41OThoLTMuOTU4djUuODEzSDI4Ljc0NlYyLjg1Nmg0LjI1OXY0LjE1aDYuMjM4di00LjE1SDQzLjV2NS42MDNoMy45NThWMi41NTVoNC4yNTl6bTQ2LjYzNC41OXYzLjcyaC00Ljk0NGMtLjM2Ni42ODMtLjc3MyAxLjM4My0xLjIzMSAyLjEwNS0uMDc0LjExOC0uMTYuMjM0LS4yMzUuMzVsNy40ODUgNC44OTgtMi4zNTggMy4yNjItNy4yMzItNS4yMDVjLS4wMzcuMDQ4LS4wNy4wOTYtLjEwNy4xNDMtLjg5NSAxLjEzNy0xLjg0IDIuMjMyLTIuODM0IDMuMjgtLjk5NSAxLjA0Ny0xLjk4IDEuOTY2LTIuOTUzIDIuNzZsLTIuNzc1LTIuODA3Yy43NzYtLjYxMSAxLjU1MS0xLjMwNiAyLjMyNy0yLjA5Ljc3Ni0uNzgyIDEuNTI2LTEuNjA3IDIuMjUyLTIuNDcuNzI2LS44NjQgMS40MDItMS43NTggMi4wMy0yLjY4NC4zNDgtLjUxNi42NjUtMS4wMy45Ni0xLjU0Mkg4Mi42di0zLjcyaDE1Ljc1MnptNi40MTgtLjU5VjguMWgyLjkwM3YzLjk2aC0yLjkwM3Y2LjRoLTQuMTY1VjIuNTU0aDQuMTY1em0tNjUuNTI3IDguMDIzaC02LjIzOHYzLjk5N2g2LjIzOHYtMy45OTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K';
    return (
        <HeaderWrap>
            <MainHeader>
                <MainHeaderTop>
                    <BJLogo href="/">
                        <img src={logoURL} width="136" height="40" alt="번개장터 로고"></img>
                    </BJLogo>
                    <SerchContainer>
                        <Serch>
                            <input
                                type="text"
                                placeholder="상품명, 지역명, @상점명 입력"
                                maxlength="40"
                            />
                            <SerchA>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeZJREFUOBGVVD1PAkEQ3VlOjY0xIdGOI0BMxMSGytJE+RsWWomx8mfYWNBpZWltg1b2NCZaGBppFAzR1njsOO9gzHEfIJdws/vmvcft7OySiT2DQqUakDtipjoZ4xsyzGy6RNzy2F7mu53nmGRiKprRw7XaQm/wdU6OG2xMTvFoFPKQLTXX86tn1G7/RHM6thjArP/xeWscn8rUWqJLee/klhdW8MM4xCQHDrjQqEkivhfLF++FEvf80luvsLGXIIwB5MABF5o0HoU1M+5RkvK1Xn29+3KfRlQMpmyCOyzfM3Y7XlMbboDUjIiuZpnBFBwsH3WGVv9Io8VuYuLEUMFZUbmqjfJt2BqC5JZyT9HEtLFyVRvlhrscBeYaS4/G+VaQV4DD7+FWPJk1Vy4aPs6R+nILoBTzMJ7MmitXtVGexXFCC8j5OpzWgyoCxzEfQQOt4hot+gjHSZZOhoLraabIEQU3EEMT70HgHl44m3KcNqUm+2SCVt8vX6E1dDdRMyzTcSCXBhRSImc6o9HkW7589Pz3cpAD8CBL3oXKkj1Ze+00xxZh+DNUMHF9SQKdEL2+en7lmNmFRmmm6jVXhGl4SchF0fcrjbnEWeQ008SSs8RZuC5fjIbWW6xm8ebCYdovlg8g+gXwsu0wmCVGbgAAAABJRU5ErkJggg=="
                                    width="16"
                                    height="16"
                                    alt="검색 버튼 아이콘"
                                />
                            </SerchA>
                        </Serch>
                    </SerchContainer>
                    <MainHeaderRight>
                        <BunTalk>
                            <img
                                src="https://m.bunjang.co.kr/pc-static/resource/32554a59cf002b3def10.png"
                                width="23"
                                height="24"
                                alt="번개톡버튼 이미지"
                            />
                            번개톡
                        </BunTalk>
                        <HeaderRightA
                            onClick={() => {
                                navigate('/shop//products');
                            }}
                        >
                            <img
                                src="https://m.bunjang.co.kr/pc-static/resource/31370b164bc5b7cc4fef.png"
                                width="23"
                                height="24"
                                alt="내상점버튼 이미지"
                            />
                            내상점
                        </HeaderRightA>
                        <HeaderRightA
                            onClick={() => {
                                navigate('/products/new');
                            }}
                        >
                            <img
                                src="https://m.bunjang.co.kr/pc-static/resource/bcc7abb5d531bcf26033.png"
                                width="23"
                                height="26"
                                alt="판매하기버튼 이미지"
                            />
                            판매하기
                        </HeaderRightA>
                    </MainHeaderRight>
                </MainHeaderTop>
                <MainHeaderBottom>
                    <Hamburger>
                        <img
                            src="https://m.bunjang.co.kr/pc-static/resource/9ddac97c001dd6e0c2eb.png"
                            width="20"
                            height="16"
                            alt="메뉴 버튼 아이콘"
                        />
                    </Hamburger>
                    <SellerContainer>
                        <Seller href="https://m.bunjang.co.kr/seller" target="_blank">
                            <b>번개장터 판매자센터</b>
                        </Seller>
                        <img
                            src="https://m.bunjang.co.kr/pc-static/resource/34a01cb11e0b14957f81.png"
                            width="72"
                            height="26"
                            alt="판매자센터"
                        ></img>
                    </SellerContainer>
                </MainHeaderBottom>
            </MainHeader>
            <SideHeader>
                <SideHeaderContainer>
                    <SideHeaderText>찜한상품</SideHeaderText>
                    <ZzimHeartContainer>
                        <ZzimHeart>
                            <img
                                src="https://m.bunjang.co.kr/pc-static/resource/11198bb2dc24672fee03.png"
                                width="9"
                                height="9"
                                alt="찜 아이콘"
                                margin-right="5px"
                                vertical-align="bottom"
                            />
                            0
                        </ZzimHeart>
                    </ZzimHeartContainer>
                </SideHeaderContainer>
                <SideHeaderContainer>
                    <SideHeaderText>최근본상품</SideHeaderText>
                    <LineContainer>
                        <Line></Line>
                    </LineContainer>
                    <RecentContainer>
                        <img
                            src="https://m.bunjang.co.kr/pc-static/resource/2e45ed358cb7e120d519.png"
                            width="28"
                            height="16"
                            alt="빈 최근본상품 아이콘"
                        />
                        <div>
                            최근 본 상품이
                            <br />
                            없습니다.
                        </div>
                    </RecentContainer>
                </SideHeaderContainer>
                <SideHeaderContainer>
                    <TopButton>TOP</TopButton>
                </SideHeaderContainer>
            </SideHeader>
        </HeaderWrap>
    );
}
// 헤더 전체 감싸고 있는 div
let HeaderWrap = styled.div`
    position: sticky;
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 35px;
    background: rgb(255, 255, 255);
    z-index: 10;
    border-bottom: 1px solid rgb(238, 238, 238);
    top: 0px;
    left: 0px;
`;
// 메인헤더(찜한 상품 말고)
let MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 1024px;
`;
// 메인헤더 중 위(로고, 검색창 등 있는 div)
let MainHeaderTop = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 1024px;
    height: 40px;
`;
// 번개장터 로고
let BJLogo = styled.a`
    margin-right: 100px;
    width: 136px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    a {
        color: rgb(33, 33, 33);
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
    }
`;
// 검색창 컨테이너
let SerchContainer = styled.div`
    border: 2px solid rgb(247, 47, 51);
    width: 460px;
    height: 40px;
    box-sizing: border-box;
    position: relative;
`;
// 검색
let Serch = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    input {
        font-size: 14px;
        -webkit-box-flex: 1;
        color: rgb(102, 102, 102);
        flex-grow: 1;
    }
`;
// 검색 돋보기 a태그
let SerchA = styled.a`
    color: rgb(33, 33, 33);
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    font-family: none;
    width: 16px;
    height: 16px;
    img {
        vertical-align: center;
        border-style: none;
    }
`;
// 헤더 오른쪽 친구들(판매하기, 내상점, 번개톡)
let MainHeaderRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    box-sizing: border-box;
`;
// 번개톡 버튼
let BunTalk = styled.button`
    margin-left: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    appearance: none;
    padding: 0px;
    border: 0px;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    direction: ltr;
    text-align: left;
    color: rgb(33, 33, 33);
    letter-spacing: -0.5px;
    img {
        margin-right: 5px;
        vertical-align: bottom;
        border-style: none;
        box-sizing: border-box;
    }
`;
// 내상점, 판매하기 a태그
let HeaderRightA = styled.a`
    margin-left: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    color: rgb(33, 33, 33);
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    direction: ltr;
    text-align: left;
    letter-spacing: -0.5px;
    img {
        margin-right: 5px;
        vertical-align: bottom;
        border-style: none;
        box-sizing: border-box;
    }
`;
// 메인헤더 중 아래
let MainHeaderBottom = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 70px;
    vertical-align: baseline;
`;
// 햄버거 아이콘
let Hamburger = styled.div`
    margin-right: 20px;
    position: relative;
    box-sizing: border-box;
    width: 20px;
    height: 16px;
    vertical-align: baseline;
    font-family: none;
    img {
        aspect-ratio: auto 20 / 16;
        vertical-align: bottom;
        border-style: none;
        box-sizing: border-box;
        position: absolute; top:0; left:0;
        width: 100%
        height: 100%
    }
`;
// margin-right: 20px;
// position: relative;
// vertical-align: baseline;
// font-family: none;
// img {
//     aspect-ratio: auto 20 / 16;
//     vertical-align: bottom;
//     border-style: none;
//     box-sizing: border-box;
// }
// 판매자센터 컨테이너
let SellerContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
`;
// 판메자센터 a태그
let Seller = styled.a`
    font-family: none;
    font-size: 14px;
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    margin-left: 10px;
    height: 21px;
    line-height: 1.5;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;
    color: rgb(33, 33, 33);
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
`;

// 사이드헤더
let SideHeader = styled.div`
    position: absolute;
    top: 102px;
    right: calc(50% - 617px);
    z-index: 20;
    box-sizing: border-box;
    width: 90px;
`;
// 찜,최근, top 컨테이너
let SideHeaderContainer = styled.div`
    :first-child {
        border-color: rgb(102, 102, 102);
    }
    :last-child {
        margin-bottom: 0px;
        padding: 0px;
        border-color: rgb(229, 229, 229);
    }
    padding: 10px;
    width: 100%;
    border: 1.3px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    margin-bottom: 6px;
    box-sizing: border-box;
`;
// 찜한 상품, 최근 본 상품 글씨 div
let SideHeaderText = styled.div`
    height: 12px;
    font-family: none;
    font-size: 12px;
    font-weight: 1000;
    color: rgb(102, 102, 102);
    text-align: center;
    margin-bottom: 8px;
    box-sizing: border-box;
`;
// 찜 하트 컨테이너
let ZzimHeartContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
`;
// 찜 하트
let ZzimHeart = styled.a`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12px;
    color: rgb(204, 204, 204);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;

        border-style: none;
    }
`;
// 최근 본 상품 줄 컨테이너
let LineContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
// 최근 본 상품 줄
let Line = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 12px;
    color: rgb(247, 0, 0);
    font-weight: 600;
    width: 38px;
    border-bottom: 2px dotted rgb(136, 136, 136);
    box-sizing: border-box;
`;
// 최근 본 상품 눈 컨테이너
let RecentContainer = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(204, 204, 204);
    font-size: 12px;
    box-sizing: border-box;
    img {
        margin-bottom: 5px;
        vertical-align: bottom;
        border-style: none;
    }
    div {
        white-space: pre-wrap;
        text-align: center;
        line-height: 1.4;
    }
`;
// TOP 버튼
let TopButton = styled.button`
    font-family: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    font-weight: 600;
    font-size: 13px;
    color: rgb(102, 102, 102);
    background-color: transparent;
    cursor: pointer;
    outline: none;
    appearance: none;
    padding: 0px;
    border: 0px;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    direction: ltr;
    text-align: left;
    letter-spacing: -0.5px;
`;
export default Header;
