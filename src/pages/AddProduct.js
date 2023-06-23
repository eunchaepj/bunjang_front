import styled from "styled-components"
import React from "react";

function AddProduct(){

    return(
        <>
        <Container>
            <AddContainer>
                <BasicInfo>
                    <h2>기본정보</h2><span>*필수항목</span>
                </BasicInfo>
                <ProductImage>
                    <ImageLeft>
                        상품이미지 <span className="star">*</span> <span className="num">(0/12)</span>
                    </ImageLeft>
                </ProductImage>
            </AddContainer>
        </Container>
        </>
    )
}

const Container = styled.div`
    width:100%;
`;
const AddContainer = styled.div`
    width: 1024px;
    margin: 0auto;
`;
const BasicInfo = styled.div`
    display: flex;
    align-items: center;
    height-bottom: 1px solid rgb(33,33,33);
    span{
        color:red;
        margin-left:20px;
    }
    h2{
        font-weight: 100px;
        font-size: 26px;
    }
`;
const ProductImage = styled.div`
    display: flex;
    height: 411px;
    padding: 32px 0px 0px;
    border-bottom: 1px solid #DCDBE4;
`;
const ImageLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    .star {
        color:red;
    }
    .num {
        color: rgb(155, 153, 169);
        margin-left: 2px;
        font-size: 12px;
    }
`;

export default AddProduct;