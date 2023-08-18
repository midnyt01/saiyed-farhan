import styled from "styled-components";
import Client1 from "../../assets/images.jpg";
import Client2 from "../../assets/unnamed.png";
import Image from "next/image";
import { Zoom } from "react-reveal";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 120px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const HeadingContainer = styled.div`
  flex: 3;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  width: 90%;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 55px;
  }
`;

const ImageContainer = styled.div`
  flex: 4;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
  @media (min-width: 800px) {
    margin-top: 0px;
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-transform: uppercase;
  border: 3px solid;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 7px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
      transform: scale(1.1);
    }

`;

const HR = styled.hr`
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  margin-top: 120px;
`;

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Heading>EXEPRTISE IN NICHE</Heading>
        </HeadingContainer>
        <ImageContainer>
          <Zoom>
            <ImageWrapper>
              E-Com
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              Medical
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              Finance
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              Recycling
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              PROFESSIONALS
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              SAAS
            </ImageWrapper>
          </Zoom>
        </ImageContainer>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default Featured;
