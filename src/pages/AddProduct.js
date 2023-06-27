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
                <ProductInfo>
                <ProductImage>
                    <ImageLeft>
                        상품이미지<span className="star">*</span><span className="num" style={{fontSize:"15px"}}>(0/12)</span>
                    </ImageLeft>
                    <ImageRight>
                            <Ul>
                                <Imageupload>
                                    {/* <img style={{width:"25px", height:"25px"}} src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg=="}/>
                                    <span style={{marginTop: "15px", fontSize: "17px"}}>이미지 등록</span>
                                    <ImageInput
                                        type="file"
                                        name="imgUrl"
                                        accept="image/*"
                                        multiple="multiple"
                                        id="image"
                                    // onChange={onChangeImg}
                                    /> */}                                    
                                    이미지 등록
                                    <input type="file" accept="image/jpg, image/jpeg, image/png" multiple/>
                                </Imageupload>
                            </Ul>
                        <ImageText>
                            <b>* 상품 이미지는 640x640에 최적화 되어 있습니다.</b>
                            <br/>
                            - 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.
                            <br/>
                            - 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.
                            <br/>
                            - 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.
                            <br/>
                            - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                            <br/>
                            - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
                            <br/>
                            최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)
                        </ImageText>
                    </ImageRight>
                </ProductImage>
                </ProductInfo>
            </AddContainer>
        </Container>
        </>
    )
}

const Container = styled.div`
    width:100%;
`;
const AddContainer = styled.div`
    display: block;
    width: 1024px;
    margin: auto;
`;
const BasicInfo = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    border-bottom: 2px solid rgb(30,29,41);
    span{
        color:red;
        margin-left:20px;
    }
    h2{
        font-weight: 100px;
        font-size: 26px;
    }
`;
const ProductInfo = styled.ul`
    padding-top: 0.5rem;
    margin: 0px;
    padding-inline-start: 0px;
`;
const ProductImage = styled.li`
    width: 100%;
    display: flex;
    padding: 2rem 0px;
    border-bottom: 1px solid rgb(220, 219, 228);
`;
const ImageLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    .star {
        color:red;
    }
    .num {
        color: rgb(155, 153, 169);
        margin-left: 4px;
        font-size: 12px;
    }
`;
const ImageRight = styled.div`
    flex: 1 1 0%;
    position: relative;
    box-sizing: border-box;
`;
const Imageupload = styled.li`
    ::before {
        content: "";
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 2rem;
        height: 2rem;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg==);
        margin-bottom: 1rem;
    }
    width: 202px;
    height: 202px;
    position: relative;
    border: 1px solid rgb(230, 229, 239);
    background: rgb(250,250,253);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(155,153,169);
    font-size: 17px;
    margin-right: 1rem;
    input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        cursor: pointer;
        font-size: 0px;
    }
`;
const ImageText = styled.div`
    margin-top: 1.5rem; 
    color: rgb(74, 164, 255);
    line-height: 1.5;
    font-size: 14px;
    p {
        line-height:0.4;
    }
`;
const Ul = styled.ul`
    display: flex;
    width: 856px;
    flex-wrap: wrap;
    overflow-x: hidden;
    padding: 0px;
    margin: 0px;
`;


export default AddProduct;