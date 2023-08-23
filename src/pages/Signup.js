import { isAction } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import '../App.css'
import { useNavigate } from "react-router-dom";

function Signup() {

    let navigate = useNavigate();

    const [userEmail, setUserEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPwCheck, setUserPwCheck] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    
    const onChangeEmail = (e) => { setUserEmail(e.target.value) }
    const onChangeId = (e) => { setUserId(e.target.value) }
    const onChangePw = (e) => { setUserPw(e.target.value) }
    const onChangePwCheck = (e) => { setUserPwCheck(e.target.value) }

    // 모든 칸이 공백이 아닌지, 비밀번호가 일치하는 지 확인
    useEffect(()=>{
        if(userEmail !== "" && userId !== "" && userPw !== "" && userPwCheck !== ""){
            setIsTrue(true)
        }else{
            setIsTrue(false)
        }
    }, [onChangeEmail, onChangeId, onChangePw, onChangePwCheck])

    function canSignup() {
        if(userPw != userPwCheck){
            window.alert("비밀번호가 일치하지 않습니다.");
        }else{
            navigate("/")
        }
    }

    return (
        <BigBox>
            <SignupContainer>
                <MainContainer>
                    <div style={{display:"block"}}>
                        <h1>번개장터 회원가입</h1>
                        <form>
                            <InfoContainer>
                                <InputText>
                                    <input placeholder="이메일" type="text" onChange={onChangeEmail}/>                        
                                </InputText>
                            </InfoContainer>
                            <InfoContainer>
                                <InputText>
                                    <input placeholder="아이디" type="text" onChange={onChangeId}/>
                                </InputText>
                            </InfoContainer>
                            <InfoContainer>
                                <InputText>
                                    <input placeholder="비밀번호" type="password" onChange={onChangePw}/>
                                </InputText>
                            </InfoContainer>
                            <InfoContainer>
                                <InputText>
                                    <input placeholder="비밀번호 확인" type="password" onChange={onChangePwCheck}/>
                                </InputText>
                            </InfoContainer>
                            <SignupBtn onClick={canSignup} className={isTrue ? "btnActive" : "btnDisabled"} disabled={!isTrue}>
                                가입하기
                            </SignupBtn>
                        </form>
                    </div>
                </MainContainer>
            </SignupContainer>
        </BigBox>
    )
}

const BigBox = styled.div`
    min-width: 1236px;
`;
const SignupContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 100px 0px;
`;
const MainContainer = styled.div`
    width: 570px;
    background: rgb(255, 255, 255);
    padding: 60px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
    h1 {
        margin-bottom: 45px;
        font-size: 30px;
        font-weight: bold;
        color: rgb(63, 63, 63);
    }
`;
const InputText = styled.label`
    display: inline-block;
    position: relative;
    width: 100%;
    input {
        height: 3rem;
        width: 100%;
        padding: 0px;
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 1px solid rgb(229, 229, 229);
        outline: none;
        appearance: none;
    }
`;
const InfoContainer = styled.div`
    margin-bottom: 1.875rem;
`;
const SignupBtn = styled.button`

    height: 72px;   
    width: 100%;
    display: inline-flex;
    border-radius: 6px;

    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 1.125rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-align: center;
`;

export default Signup;