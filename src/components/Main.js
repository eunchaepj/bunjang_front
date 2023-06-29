import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
    //let dispatch = useDispatch();
    //let state = useSelector((state) => state);
    return (
        <>
            <Section>
                <H2>오늘의 상품 추천</H2>
                <ItemInfos>
                    <ItemContainer>
                        <Cards />
                    </ItemContainer>
                </ItemInfos>
            </Section>
        </>
    );
}

const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
`;
const Section = styled.section`
    width: 1024px;
    margin: auto;
    padding: 3.5rem 0px 1.5rem;
`;
const ItemInfos = styled.div`
    position: relative;
    overflow: hidden;
`;
const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default Main;
