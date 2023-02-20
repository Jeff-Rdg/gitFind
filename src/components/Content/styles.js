import styled from "styled-components";

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const ContentBackgroundImg = styled.img`
  height: 100vh;
  position: absolute;
  left: 0;
`;

export const ContentInfo = styled.div`
  width: 60%;
  margin-right: 90px;
  margin-top: 40px;
  color: #ffffff;
`;

export const ContentSearch = styled.div``;

export const ContentProfile = styled.div`
  display: flex;
  margin: 40px 0;
  margin-right: 32px;
`;

export const ContentProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 2px solid #e5e5e5;
`;

export const ContentProfileDetails = styled.div`
  h3 {
    color: #999999;
    font-size: 24px;
    margin: 0;
    margin-left: 32px;
  }

  span {
    display: block;
    color: #999999;
    font-size: 12px;
    margin: 0;
    margin-left: 32px;
  }

  p {
    color: #999999;
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
    margin-left: 32px;
  }
`;

export const ContentSection = styled.div``;

export const ContentSectionText = styled.h4`
  font-size: 32px;
  color: #ffffff;
  margin: 12px 0;
  text-align: center;
`;
