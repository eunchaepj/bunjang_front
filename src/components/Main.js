import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

function Main() {


    return (
        <>
            <Section>
                <H2>오늘의 상품 추천</H2>
                <ItemContainer>
                    {/* productInfo넣는 칸 */}
                    <Cards/>
                </ItemContainer>
            </Section>
        </>
    );
}

const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
`
const Section = styled.section`
    width: 1024px;
    margin: auto;
    padding: 3.5rem 0px 1.5rem;
`
const ItemInfos = styled.div`
    position: relative;
    overflow: hidden;
`
const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default Main;
