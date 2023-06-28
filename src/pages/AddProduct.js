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
                <ProductSection>
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
                </ProductSection>
                <ProductSection>
                    <TitleLeft>
                        제목
                        <span>*</span>
                    </TitleLeft>
                    <TitleRight>
                        <Inputbox>
                            <input type="text" placeholder="상품 제목을 입력해주세요."/>
                            <a href="https://help.bunjang.co.kr/faq/2/220">거래금지 품목</a>
                        </Inputbox>
                        <InputTextSize>
                            0/40
                        </InputTextSize>
                    </TitleRight>
                </ProductSection>
                <ProductSection>
                    <CategoryLeft>
                        카테고리
                        <span>*</span>
                    </CategoryLeft>
                    <CategoryRight>
                        <CategoryBox>
                            <CategoryList>
                                <Categories>
                                    <Category>
                                        <CategoryButton>여성의류</CategoryButton>
                                    </Category>
                                    <Category>
                                        <CategoryButton>남성의류</CategoryButton>
                                    </Category>
                                    <Category>   
                                        <CategoryButton>신발</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>가방/지갑</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>시계</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>쥬얼리</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>패션 액세서리</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>디지털</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>가전제품</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>스포츠/레저</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>차량/오토바이</CategoryButton>
                                    </Category> 
                                    <Category>
                                        <CategoryButton>스타굿즈</CategoryButton>
                                    </Category>
                                    <Category>
                                        <CategoryButton>키덜트</CategoryButton>
                                    </Category>
                                    <Category>   
                                        <CategoryButton>예술/희귀/수집품</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>음반/악기</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>도서/티켓/문구</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>뷰티/미용</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>가구/인테리어</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>생활/주방용품</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>공구/산업용품</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>식품</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>유아동/출산</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>반려동물용품</CategoryButton>
                                    </Category> 
                                    <Category>   
                                        <CategoryButton>기타</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>지역 서비스</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>원룸/함께살아요</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>번개나눔</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>구인구직</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>재능</CategoryButton>
                                    </Category> 
                                    <Category>    
                                        <CategoryButton>커뮤니티</CategoryButton>
                                    </Category> 

                                </Categories>
                            </CategoryList>
                            <CategoryList>중분류 선택</CategoryList>
                            <CategoryList>소분류 선택</CategoryList>
                        </CategoryBox>
                        <SelectCategory>
                            <SelectCategoryText>
                                선택한 카테고리 : 
                                <b></b>
                            </SelectCategoryText>
                        </SelectCategory>
                    </CategoryRight>
                </ProductSection>
                <ProductSection>
                        <LocationLeft>
                            거래지역
                            <span>*</span>
                        </LocationLeft>
                        <LocationRight>
                            <div>
                                <SelectLocation>
                                    내 위치
                                </SelectLocation>
                                <SelectLocation>
                                    최근 지역
                                </SelectLocation>
                                <SelectLocation>
                                    주소 검색
                                </SelectLocation>
                                <SelectLocation>
                                    지역설정안함
                                </SelectLocation>
                            </div>
                            <SellingLocationText>
                            
                            </SellingLocationText>
                        </LocationRight>
                </ProductSection>
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
const ProductSection = styled.li`
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
const TitleLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    padding-top: 14px;
    span{
        color:red;
    }
`;
const TitleRight = styled.div`
    flex: 1 1 0%;
    position: relative;
    display: flex;
    width: 100%
    -webkit-box-align: center;
    align-items: center;
`;
const Inputbox = styled.div`
    flex: 1 1 0%;
    position: relative;
    display: flex;
    -webket-box-align: center;
    align-items: center;
    input {
        height: 3rem;
        padding: 0px 1rem;
        border: 1px solid rgb(195,194,204);
        width: 100%;
    }
    a {
        position: absolute;
        right: 1rem;
        font-size: 1rem;
        color: rgb(155, 153, 169);
        text-decoration: underline;
    }
`;
const InputTextSize = styled.div`
    margin-left: 1.5rem;
    font-size: 1rem;
    text-align: right;    
`;
const CategoryLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    padding-top: 8px;
    span{
        color:red;
    }
`;
const CategoryRight = styled.div`
    flex: 1 1 0%;
    position: relative;
`;
const CategoryBox = styled.div`
    display: flex;
    width: 100%;
    height: 19rem;
    overflow: hidden;
    border: 1px solid rgb(220,219,228);
`;
const CategoryList = styled.div`
    width: 284px;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow-y: auto;
    color: rgb(195, 194, 204);
    :nth-child(2), :nth-child(3) {
        border-left: 1px solid rgb(220,219,228);
    }
`;
const Categories = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0.5rem 0px;
`;
const Category = styled.li`
    display: flex;
    width: 100%;
    height: 40px;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;

`;
const CategoryButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0px 1.5rem;
    background-color: rgb(255,255,255);
`;
const SelectCategory = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
`;
const SelectCategoryText = styled.h3`
    font-size: 16px;
    color: rgb(255,80,88);
`;

const LocationLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    padding-top: 14px;
    span{
        color:red;
    }
`;
const LocationRight = styled.div`
    flex: 1 1 0%;
    position: relative;
`;
const SelectLocation = styled.button`
    height: 3rem;
    width: 6.5rem;
    text-align: center;
    border: 1px solid rgb(195,194,204);
    margin-right: 1rem;
    border-radius: 2px;
`;
const SellingLocationText = styled.input`
    width: 100%;
    margin-top: 1rem;
    placeholder="선호 거래 지역을 검색해주세요."
    value="지역설정안함"

`;

export default AddProduct;