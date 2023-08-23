import styled from "styled-components"
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginModal(){
    let navigate = useNavigate()
    return (
       <div>
            <Background>
                <ModalContainer>
                    <CloseBtn>
                        <img src="https://m.bunjang.co.kr/pc-static/resource/ee442d3dd827628bc5fe.png" width={24} height={24} alt="로그인 모달 닫기 버튼 아이콘"/>

                    </CloseBtn>
                    <div style={{paddingTop:"40px"}}>
                        <ModalLogo src="https://m.bunjang.co.kr/pc-static/resource/56db3dd43075482b1d31.png"/>
                        <MainText>번개장터로 중고거래 시작하기</MainText>
                        <SubText>간편하게 가입하고 상품을 확인하세요</SubText>
                        <BtnGroup>
                            <SnsBtn>
                                <Kakao/>
                                카카오로 이용하기
                            </SnsBtn>
                            <SnsBtn>
                                <Facebook/>
                                페이스북으로 이용하기
                            </SnsBtn>
                            <SnsBtn>
                                <Naver/>
                                네이버로 이용하기
                            </SnsBtn>
                            <SignBtn onClick={()=>{navigate("/signup")}}>
                                <Signup/>
                                회원가입 하러가기  
                            </SignBtn>   
                        </BtnGroup>
                        <HelpContainer>
                            <HelpText>
                                도움이 필요하면
                                <a href="mailto:help@bunjang.co.kr">이메일</a>
                                또는 고객센터
                                <b>1670-2910</b>
                                로 문의 부탁드립니다
                                <br/>
                                고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
                            </HelpText>
                        </HelpContainer>
                    </div>
                </ModalContainer>
            </Background>
       </div>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
`;
const ModalContainer = styled.div`
    background: rgb(247, 247, 247);
    width: 420px;
    height: 506px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 50px 0px;
    position: relative;
`;
const CloseBtn = styled.button`
     position: absolute;
     top: 20px;
     right: 20px;
`;
const ModalLogo = styled.img`
    width: 30px;
    height: 34px;
    display: block;
    margin: auto auto 10px;
`;
const MainText = styled.div`
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
`;
const SubText = styled.div`
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 35px;
    text-align: center;
`;
const BtnGroup = styled.div`
    padding: 0px 70px;
`;
const SnsBtn = styled.div`
    width: 100%;
    height: 38px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 7px 0px;
    background: rgb(255, 255, 255);
    text-align: center;
    border-radius: 4px;
    margin-bottom: 12px;
    position: relative;
    font-size: 14px;
    line-height: 37px;
`;
const SignBtn = styled.div`
    width: 100%;
    height: 38px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 7px 0px;
    background: rgb(255, 255, 255);
    text-align: center;
    border-radius: 4px;
    position: relative;
    font-size: 14px;
    line-height: 37px;
`;
const Kakao = styled.div`
    background-image: url("https://m.bunjang.co.kr/pc-static/resource/7bf83f72cf54461af573.png");
    position: absolute;
    top: calc(50% - 12px);
    left: 35px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
`;
const Facebook = styled.div`
    background-image: url("https://m.bunjang.co.kr/pc-static/resource/fc95a45c5428930755c1.png");
    position: absolute;
    top: calc(50% - 12px);
    left: 35px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
`;
const Naver = styled.div`
    background-image: url("https://m.bunjang.co.kr/pc-static/resource/46a186687d81b27fc2c9.png");
    position: absolute;
    top: calc(50% - 12px);
    left: 35px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
`;
const Signup = styled.button`
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM5Qjk5QTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjYgMGMuNDQyIDAgLjguMzU4LjguOHYxNC40YzAgLjQ0Mi0uMzU4LjgtLjguOEgyLjRjLS40NDIgMC0uOC0uMzU4LS44LS44Vi44YzAtLjQ0Mi4zNTgtLjguOC0uOGgxMS4yek0zLjIgMTQuNFYxLjZoOS42djEyLjhIMy4yek02LjQgNGMwLS40NDIuMzU4LS44LjgtLjhoMS42Yy40NDIgMCAuOC4zNTguOC44IDAgLjQ0Mi0uMzU4LjgtLjguOEg3LjJjLS40NDIgMC0uOC0uMzU4LS44LS44em0yLjQgOGMwIC40NDItLjM1OC44LS44LjgtLjQ0MiAwLS44LS4zNTgtLjgtLjggMC0uNDQyLjM1OC0uOC44LS44LjQ0MiAwIC44LjM1OC44Ljh6Ii8+Cjwvc3ZnPgo=");
    position: absolute;
    top: calc(50% - 12px);
    left: 35px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
`;
const HelpContainer = styled.div`
    padding: 3.5rem 2rem 1.5rem;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(153, 153, 153);
    a { 
        font-weight: normal;
        text-decoration: underline;
        color: rgb(102, 102, 102);
    }
    b {
        font-weight: normal;
        color: rgb(102, 102, 102);
    }
`;
const HelpText = styled.p`
    margin 0px;
    width: 100%;
    border-top: 1px solid rgb(229, 229, 229);
    padding-top: 1rem;
`;
export default LoginModal;