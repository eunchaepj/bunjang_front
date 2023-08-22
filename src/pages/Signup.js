import React from "react";
import styled from "styled-components";

function Signup() {
    return (
        <BigBox>
            <SignupContainer>
                <MainContainer>
                    <div style={{display:"block"}}>
                        <h1>번개장터 회원가입</h1>
                        <form>
                            <InputId>
                                <input placeholder="아이디"/>
                            </InputId>
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
const InputId = styled.label`
    display: inline-block;
    position: relative;
    width: 100%;
    input {
        height: 3rem;
        width: 100%
        padding: 0px;
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 1px solid rgb(229, 229, 229);
        outline: none;
        appearance: none;
    }
`;
const InputIdStyle = styled.span`
`;

export default Signup;