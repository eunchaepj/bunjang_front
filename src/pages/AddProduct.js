import styled from "styled-components"
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "../App.css"

function AddProduct(){

    const [image, setImage] = useState("");
    const [imageList, setImageList] = useState("");
    const [imgCount, setImgCount] = useState(0);
    const [title, setTitle] = useState("두글");
    const [isTrue, setIsTrue] = useState(false);
    
    const onChangeImg = (e)=>{
        console.log(e.target.value)
        var reader = new FileReader();
        reader.onload = (e)=>{
            setImage(e.target.result);
            console.log(image)
            setImageList([...imageList, e.target.result]) 
            setImgCount(imgCount+1)
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onChangeTitle = (e)=>{ setTitle(e.target.value) }

    return(
        <>
        <Container>
            <AddContainer>
                <Section>
                <BasicInfo>
                    <h2>기본정보</h2><span>*필수항목</span>
                </BasicInfo>
                <ProductInfo> 
                <ProductSection>
                    <ImageLeft>
                        상품이미지<span className="star">*</span><span className="num" style={{fontSize:"15px"}}>({imgCount}/12)</span>
                    </ImageLeft>
                    <RightBox>
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
                                    <input type="file" accept="image/jpg, image/jpeg, image/png" onChange={onChangeImg}/>
                                </Imageupload>
                                    {
                                        imageList.length > 0 ?
                                            imageList.map((a, i)=>{
                                                console.log(i)
                                                return (
                                                    <ImgList>
                                                        <img src={imageList[i]} key={i} width={200} height={200}/>
                                                    </ImgList>  
                                                )
                                            })
                                        : null
                                    }
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
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <LeftBox>
                        제목
                        <span>*</span>
                    </LeftBox>
                    <RightBox>
                        <Inputbox className="Solidyellow">
                            <input onChange={onChangeTitle} type="text" placeholder="상품 제목을 입력해주세요." className={title.length < 2 ? "Solidyellow" : null}/>
                            <a href="https://help.bunjang.co.kr/faq/2/220">거래금지 품목</a>       
                        </Inputbox>
                        { title.length < 2 ? <YellowBox>상품명을 2자 이상 입력해주세요</YellowBox> : null }
                        <InputTextSize>
                            {title.length}/40
                        </InputTextSize>
                    </RightBox>
                </ProductSection>
                {/* <ProductSection>
                    <CategoryLeft>
                        카테고리
                        <span>*</span>
                    </CategoryLeft>
                    <RightBox>
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
                    </RightBox>
                </ProductSection> */}
                <ProductSection>
                        <LeftBox>
                            거래지역
                            <span>*</span>
                        </LeftBox>
                        <RightBox>
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
                        </RightBox>
                </ProductSection>
                <ProductSection>
                    <InputradioLeft>
                        상태
                        <span>*</span>
                    </InputradioLeft>
                    <RightBox>
                        <SelectRadio>
                            {/* 빨간색 버튼 이미지 안 함 (선택에 따라 className이 바뀜 ????) */}
                            <Checked>
                                <input id="중고상품" type="radio" value={0}/>
                                중고상품
                            </Checked>
                            <Unchecked>
                                <input id="새상품" type="radio" value={0}/>
                                새상품
                            </Unchecked>
                        </SelectRadio>
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <InputradioLeft>
                        교환
                        <span>*</span>
                    </InputradioLeft>
                    <RightBox>
                        <SelectRadio>
                            <Checked>
                                <input id="교환불가" type="radio" value={0}/>
                                교환불가
                            </Checked>
                            <Unchecked>
                                <input id="교환가능" type="radio" value={0}/>
                                교환가능
                            </Unchecked>
                        </SelectRadio>
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <LeftBox>
                        가격
                        <span>*</span>
                    </LeftBox>
                    <RightBox>
                        <InputPrice type="text" placeholder="숫자만 입력해주세요.">
                        </InputPrice>
                        원
                        <DeliveryBox>
                            <DeliveryInnerBox>
                                <DeliveryLabel>
                                    <input type="checkbox"/>
                                    배송비 포함
                                </DeliveryLabel>
                            </DeliveryInnerBox>
                        </DeliveryBox>
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <Explanationleft>
                        설명
                        <span>*</span>
                    </Explanationleft>
                    <RightBox>
                        <ExplanationRight type="text" rows={6}></ExplanationRight>
                        <NeedExplanationBox>
                            여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)
                            <br/>
                            <span>
                                안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과 번개장터(주)가 함께 합니다.
                            </span>
                        </NeedExplanationBox>
                        <KakaoBox>
                            <span>
                                혹시 
                                <a href="https://help.bunjang.co.kr/notice/607" target="_blank"> 카카오톡 ID</a>
                                를 적으셨나요?
                            </span>
                            <ExplanationSize>
                                0/2000
                            </ExplanationSize>
                        </KakaoBox>
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <Explanationleft>연관태그</Explanationleft>
                    <RightBox>
                        <TagBox>
                            <TagInnerBox>
                                <InputTag>
                                    <input type="text" placeholder="연관태그를 입력해주세요. (최대 5개)"/>
                                </InputTag>
                            </TagInnerBox>
                        </TagBox>
                        <TagCondition>
                            <li>
                                <p>태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.</p>
                            </li>
                            <li>
                                <p>태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을 보장하지는 않습니다.</p>
                            </li>
                            <li>
                                <p>검색 광고는 태그정보를 기준으로 노출됩니다.</p>
                            </li>
                            <li>
                                <p>상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.</p>
                            </li>
                        </TagCondition>
                    </RightBox>
                </ProductSection>
                <ProductSection>
                    <Amount>수량</Amount>
                    <RightBox>
                        <InputAmount type="text"/>
                        개
                    </RightBox>
                </ProductSection>
                </ProductInfo>
                </Section>
                <Section>
                    <SaleContainer>
                        <h2>
                            빠른 판매
                            <Saledescription>
                                 <p>내 상품에 안전결제 배지가 표시돼요</p>
                                 <a href="https://m.bunjang.co.kr/banner/pay?utm_source=pay-filter&utm_medium=product-register&utm_campaign=pay-master-seller-2109#seller" target="_blank">자세히</a>   
                            </Saledescription>
                        </h2>
                    </SaleContainer>
                    <SafePaymentContainer>
                        <SafeInnerContainer>
                            <ImageLeft>
                                옵션
                            </ImageLeft>
                            <RightBox>
                                <SafeCheckBox>
                                    <SafeCheckLabel>
                                        <input id="" type="checkbox"/>
                                        <SafeText>
                                            <span>안전결제 환영</span>
                                            <svg width={60} height={24} viewBox="0 0 35 16" xmlns="http://www.w3.org/2000/svg" role="img">
                                                <g></g>
                                            </svg>
                                        </SafeText>
                                    </SafeCheckLabel>
                                </SafeCheckBox>
                            </RightBox>
                        </SafeInnerContainer>
                    </SafePaymentContainer>
                </Section>
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
const LeftBox = styled.div`
    width: 10.5rem;
    font-size: 18px;
    padding-top: 14px;
    span{
        color:red;
    }
`;
const RightBox = styled.div`
    flex: 1 1 0%;
    position: relative;
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
const ImgList = styled.li`
    width: 202px;
    height: 202px;
    border: 1px solid rgb(230, 229, 239);
    margin-right: 1rem;
    margin-bottom: 1rem;
    list-style-type: none;
    position: relative;
    display: flex;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        overflow: hidden;
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
    input:hover {
            border: 1px solid rgb(0,0,0);
        }
    a {
        position: absolute;
        right: 1rem;
        font-size: 1rem;
        color: rgb(155, 153, 169);
        text-decoration: underline;
    }
`;
const YellowBox = styled.div`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: 0.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    ::before {
        content: "";
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 1rem;
        height: 1rem;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGNTdFMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNiA4YzAtMS40NzcuNTA4LTIuODM0IDEuMzUtMy45MThsOC45NjggOC45NjhBNi4zNjMgNi4zNjMgMCAwIDEgOCAxNC40IDYuNDA3IDYuNDA3IDAgMCAxIDEuNiA4bTExLjQ1IDMuOTE4TDQuMDgyIDIuOTVBNi4zNjMgNi4zNjMgMCAwIDEgOCAxLjZjMy41MjkgMCA2LjQgMi44NzEgNi40IDYuNCAwIDEuNDItLjQ3NiAyLjc5OS0xLjM1IDMuOTE4TTAgOGMwIDQuNDExIDMuNTg5IDggOCA4czgtMy41ODkgOC04LTMuNTg5LTgtOC04LTggMy41ODktOCA4Ii8+Cjwvc3ZnPgo=);
        margin-right: 0.5rem;);
        margin-right: 0.5rem;
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
const SelectLocation = styled.button`
    height: 3rem;
    width: 6.5rem;
    text-align: center;
    border: 1px solid rgb(195,194,204);
    margin-right: 1rem;
    border-radius: 2px;
    background-color: rgb(255,255,255);
`;
const SellingLocationText = styled.input`
    width: 100%;
    margin-top: 1rem;
    height: 3rem;
    padding: 0px 1rem;
    border: 1px solid rgb(195, 194, 204);
    background: rgb(244, 244, 250);
`;
const InputradioLeft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    span {
        color: red;
    }
`;
const SelectRadio = styled.div`
     display: flex;
`;
const Checked = styled.label`
    ::before {
    }
    for="중고상품";
    display: flex;
    font-size: 1rem;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-right: 2rem;
`;
const Unchecked = styled.label`
    for="새상품";
    display: flex;
    font-size: 1rem;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-right: 2rem;
`;
const InputPrice = styled.input`
    height: 3rem;
    padding: 0px 1rem;
    border: 1px solid rgb(195, 194, 204);
    appearance: none;
    width: 240px;
    margin-right: 1rem;
`;
const DeliveryBox = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;
const DeliveryInnerBox = styled.div`
    margin-right: 2rem;
`;
const DeliveryLabel = styled.label`
    ::before {
        content: "";
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNDM0MyQ0MiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDBDNC40ODYgMCAwIDQuNDg2IDAgMTBzNC40ODYgMTAgMTAgMTAgMTAtNC40ODYgMTAtMTBTMTUuNTE0IDAgMTAgMG0wIDE4Yy00LjQxMSAwLTgtMy41ODktOC04czMuNTg5LTggOC04IDggMy41ODkgOCA4LTMuNTg5IDgtOCA4bTIuMjkzLTEwLjcwN0w5IDEwLjU4NiA3LjcwNyA5LjI5M2ExIDEgMCAxIDAtMS40MTQgMS40MTRsMiAyYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNC00YTEgMSAwIDEgMC0xLjQxNC0xLjQxNCIvPgo8L3N2Zz4K);
        border-radius: 50%;
        box-sizing: border-box;
    }
    :hover::before {
        background-color: rgba(30, 29, 41, 0.06);
    }
    input {
        background: rgb(244, 244, 250);
        height: 3rem;
        padding: 0px 1rem;
        display: none;
        border: 1px solid rgb(195, 194, 204);
        [type="checkbox"] {
            box-sizing: border-box;
        }
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
`;
const Explanationleft = styled.div`
    width: 10.5rem;
    font-size: 18px;
    padding-top: 18px;
    span {
        color: rgb(255, 80, 88);
    }
`;
const ExplanationRight = styled.textarea`
    padding: 1rem;
    resize: none;
    line-height: 1.35;
    border: 1px solid rgb(195, 194, 204);
    width: 100%;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    direction: ltr;
    text-align: left;
    color: rgb(33, 33, 33);
    letter-spacing: -0.5px;
    outline: 0px;
    :focus {
        border-color: rgb(30, 29, 41)
    }
`;
const NeedExplanationBox = styled.div`
    position: absolute;
    top: 0px;
    padding: 1rem;
    line-height: 16px;
    color: rgb(155, 153, 169);
    span {
        display: inline-block;
        margin-top: 8px;
        font-size: 12px;
    }
`;
const KakaoBox = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 0.3rem;
    height: 16px; 
    span {
        font-size: 1rem;
        color: rgb(155,153,169);
    }
    span a {
        color: rgb(155,153,169);
        text-decoration: underline;
        cursor: pointer;
    }
`;
const ExplanationSize = styled.div`
    text-align: right;
`;
const TagBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3rem;
    border: 1px solid rgb(195, 194, 204);
    position: relative;
`;
const TagInnerBox = styled.div`
    flex: 1 1 0%;
    height: 100%;
`;
const InputTag = styled.div`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    input {
        padding: 0px 1rem;
        width: 100%;
        height: 100% !important;
        border: 0px !important;
        appearance: none;
    }
`;
const TagCondition = styled.ul`
    padding-top: 0.5rem;
    padding-left: 0px;
    line-height: 1.3;
    color: rgb(136, 136, 136);
    li::before {
        content: "- ";
        box-sizing: border-box;
    }
    li {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.25rem;
    }
    li > p {
        line-height: 1.5;
        margin: 0 0 0 0.5rem;
    }
`;
const Amount = styled.div`
    width: 10.5rem;
    font-size: 18px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const InputAmount = styled.input`
    height: 3rem;
    padding: 0px 1rem;
    border: 1px solid rgb(195, 194, 204);
    width: 240px;
    margin-right: 1rem;
`;
const Section = styled.section`
    display: block;
    margin-bottom: 3rem;
`;
const SaleContainer = styled.div`
    h2 {
        height: 100px;
        font-size: 26px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-bottom: 2px solid rgb(30,29,41);
    }
    letter-spacing: normal;
    `;
    // font-family: AppleSDFothic;
const Saledescription = styled.div`
    p {
        font-size: 16px;
        font-weight: normal;
        color: rgb(30, 29, 41);
        margin: 0 0;
    }
    a {
        margin-left: 4px;
        font-size: 16px;
        text-decoration: underline;
        color: rgb(30, 29, 41);
    }
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 6px;
    font-size: 12px;
    color: rgb(155, 153, 169);
`;
const SafePaymentContainer = styled.ul`
    padding-top: 0.5rem;
`;
const SafeInnerContainer = styled.li`
    :last-child {
        border-bottom: 0px;
    }
    width: 100%;
    display: flex;
    padding: 2rem 0px;
`;
const SafeCheckBox = styled.div`
    margin-right: 2rem;
`;
const SafeCheckLabel = styled.label`
    ::before {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNGRjUwNTgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDBDNC40ODYgMCAwIDQuNDg2IDAgMTBzNC40ODYgMTAgMTAgMTAgMTAtNC40ODYgMTAtMTBTMTUuNTE0IDAgMTAgMG0yLjI5MyA3LjI5M0w5IDEwLjU4NiA3LjcwNyA5LjI5M2ExIDEgMCAxIDAtMS40MTQgMS40MTRsMiAyYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNC00YTEgMSAwIDEgMC0xLjQxNC0xLjQxNCIvPgo8L3N2Zz4K)
    }
    :hover::before {
        background-color: rgba(255,80,88,0.08);
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
`;
const SafeText = styled.span`
    display: flex;
    height: 32px;
    font-weight: bold;
    span {
        margin-top: 6.5px;
    }
    svg {
        margin-left: 6px;
        align-self: center;
    }
`;
export default AddProduct;