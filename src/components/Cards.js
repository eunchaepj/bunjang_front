import React from "react";
import styled from "styled-components";

function Cards() {
    return (
        <>
        {/* repeat : 5열 각 200px으로 정렬하겠다 */}
          <div style={{width:'100%', display:"grid", gridTemplateColumns: 'repeat(5, 200px)', gap: '10px'}}>
            <Card>
                <CardInner>
                    <CardHead>
                        <img src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg" alt="product"/>
                        <Sth/>
                    </CardHead>
                    <CardContents>
                        <ItemName>제인패커 유로피안 라일락75ml 향수</ItemName>
                        <ItemContentBottom>
                            <Price>101,600</Price>
                            <Time>시간</Time>
                        </ItemContentBottom>
                    </CardContents>
                </CardInner>
            </Card>
          </div>
        </>
    );
}


const Card = styled.div`
  width: 196px;
  margin-right: 11px;
  margin-bottom: 11px;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;
const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const Sth = styled.div``;
const CardContents = styled.div`
  padding: 15px 10px;
  height: 80px;
`;
const ItemName = styled.div`
  height: 34px;
  padding-top: -10px;
  position: relative;
  font-size: 14px;
  padding-bottom: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after{
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;
const Time = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

export default Cards;
