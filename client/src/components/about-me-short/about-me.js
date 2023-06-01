import Image from "next/image";
import styled from "styled-components";
import CoverImage from "../../assets/cover_image.jpg";
import { Fade } from "react-reveal";
import Link from "next/link";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  @media (min-width: 800px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: left;
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const Content = styled.div`
  font-size: 16px;
  margin-top: 20px;
  width: 100%;
  letter-spacing: 0.5px;
  width: 100%;
  @media (min-width: 800px) {
    width: 85%;
    margin-top: 50px;
  }
`;

const CallToAction = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  width: 60%;
  justify-content: space-between;

  a {
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 5px 15px;
  transition: 0.2s all ease;
  &:hover {
      background: black;
      color: white;
    }
  }

`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  @media (min-width: 800px) {
    margin-top: 20px;
  }

  img {
    width: 100%;
    margin: auto;
    height: auto;
    border-radius: 15px;
    @media (min-width: 800px) {
      width: 90%;
    }
  }
`;

const HR = styled.hr`
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  margin-top: 50px;
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>Why You Should Hire Me</Title>
          <Content>
          As a Digital Marketing Consultant, I bring a wealth of experience and knowledge to the table. I have a proven track record of delivering successful digital marketing campaigns for a variety of businesses and industries. My skills and expertise in areas such as SEO, SEM, SMM, and Content Marketing will help your business reach its full potential online.
          </Content>
          <CallToAction>
              <Link href="/online-marketing-consultant" style={{fontWeight: '400'}} >
                Know Me More
              </Link>
          </CallToAction>
        </InfoContainer>
        <ImageContainer>
          <Fade bottom>
            <Image src={CoverImage} alt="cover image" />
          </Fade>
        </ImageContainer>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default AboutMe;
