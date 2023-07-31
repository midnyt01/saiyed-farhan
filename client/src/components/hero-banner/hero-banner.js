import HeroImg from "../../assets/marketing_funnels_1.webp";
import HeroImg1 from "../../assets/IIMK-ASMP-1140x900.jpg";
import HeroImg2 from "../../assets/The-Role-of-Marketing-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import Head from "next/head";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-reveal";


const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

`;
const SliderContainer = styled.div`
    width: 350px;
    border-radius: 12px;
    margin: auto;
    margin-top: 50px;
    @media (min-width: 800px) {
        // margin: 0;
        margin-top: 50px;
    }
`;
const HeroBannerContainer = styled.div`
  width: 100%;
  text-align: right;
  overflow-x: hidden;
`;

const Title = styled.h1`
font-size: 50px;
letter-spacing: 5px;
margin-top: -10px;
text-align: left;
   @media(min-width: 800px) {
    font-size: 150px;
    margin: 0;
    margin-top: -20px;
    letter-spacing: 27px;
    text-align: right;
   }
`;

const Subtitle = styled.h2`
color: rgb(83,83,83);
text-transform: uppercase;
font-size: 18px;
text-align: left;
letter-spacing: 0.5px;
margin-top: -8px;
text-transform: uppercase;

@media(min-width: 800px) {
    font-size: 30px;
    letter-spacing: 20px;
    margin-top: -20px;
    margin-right: 10px;
    text-align: right;
   }

`;

const HR = styled.hr`
width: 90%;
margin-right: 30px;
box-sizing: border-box;
margin-top: 20px;
`

const settings = {
  accessibility: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease",
  draggable: true,
  fade: false,
  focusOnSelect: false,
  pauseOnHover: true,
  swipe: true,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  variableWidth: false,
  vertical: true,
  verticalSwiping: true,
  adaptiveHeight: false
};


const HeroBanner = () => {

  return (
    <Container>
      <Wrapper>
      <SliderContainer>
          <Slider {...settings}>
            <div className="hero-img-wrapper">
              <Image src={HeroImg} width={350} alt="Hero banner" style={{borderRadius: '12px'}} />
            </div>

            <div className="hero-img-wrapper">
              <Image src={HeroImg1} width={350} alt="Hero banner" style={{borderRadius: '12px'}} />
            </div>

            <div className="hero-img-wrapper">
              <Image src={HeroImg2} width={350} alt="Hero banner" style={{borderRadius: '12px'}} />
            </div>
          </Slider>
        </SliderContainer>
        <HeroBannerContainer>
          <Slide right duration={1500}>
            <Title>SAIYED</Title>
            <br />
            <Title>FARHAN</Title>
            </Slide>
            <Slide left delay={500}>
            <Subtitle>Marketing Correctly</Subtitle>
            </Slide>
        </HeroBannerContainer>
        {/* <HR /> */}
      </Wrapper>
    </Container>
  );
};

export default HeroBanner;
