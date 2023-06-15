import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
function Banner() {
    // 슬라이드 세팅
    const setting = {
        dots: false, // 슬라이드 밑에 점 보이게
        arrows: true, // 양 옆 화살표
        infinite: true, // 슬라이드 무한 반복
        speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데 까지 걸리는 시간(ms)
        autoplay: true, // 슬라이드 자동으로 넘김 사용 여부
        autoplaySpeed: 3000, // 슬라이드 자동 이동 속도
        slidesToshow: 6, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, // 스크롤 한 번에 움직일 컨텐츠 개수
        nextArrow: <button type="button" class="slick-prev" />, // 다음 화살표 모양 설정
        prevArrow: <button type="button" class="slick-next" />, // 이전 화살표 모양 설정
    };

    return (
        <>
            <BannerBox>
                <Slider {...setting}>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/992397961_w3087.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/992397649_w3087.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/991215665_w2058.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/988148679_w3087.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/997248661_w3087.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/992092515_w3087.jpg" />
                    </div>
                    <div>
                        <Img src="https://media.bunjang.co.kr/images/nocrop/992398252_w3087.jpg" />
                    </div>
                </Slider>
            </BannerBox>
        </>
    );
}
const BannerBox = styled.div`
    position: relative;
    height: 300px;
    width: 1026px;
    margin: 0px auto;
    background: white;
    vertical-align: baseline;
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;

const Img = styled.img`
    width: 1030px;
    height: 300px;
    display: block;
    top: 0px;
    left: 0px;
    object-fit: cover;
    position: relative;
    vertical-align: bottom;
    border-style: none;
`;
export default Banner;
