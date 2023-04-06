import Image from "next/image";
import styled from "styled-components";
import CoverImage from "../../assets/cover_image.jpg";


const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
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
font-size: 25px;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-align: left;
font-weight: 600;
letter-spacing: 1px;
@media (min-width: 800px) {
    font-size: 40px;
    width: 90%;
}
`;

const Content = styled.div`
font-size: 17px;
margin-top: 20px;
width: 100%;
letter-spacing: 0.5px;
width:100%;
@media (min-width: 800px) {
    width: 85%;
    margin-top: 50px;
    font-size: 25px;
}
`;

const ImageContainer = styled.div`
flex: 1;
width: 100%;
margin: auto;
margin-top: 50px;
@media (min-width: 800px) {
    margin-top: 200px;
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
`

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>why you should work with me</Title>
          <Content>
            Ullamco in voluptate incididunt aute quis reprehenderit veniam esse
            deserunt fugiat qui commodo. Dolor culpa esse adipisicing occaecat
            incididunt laborum elit veniam amet labore amet incididunt mollit.
            Lorem cillum non ea pariatur aliqua aute pariatur. Minim do labore
            laborum sit pariatur sint tempor et duis aliquip veniam consequat
            exercitation exercitation. Duis et et do excepteur pariatur fugiat
            nulla cillum amet consectetur mollit ipsum. Reprehenderit culpa
            laborum proident nostrud excepteur aute ex magna minim culpa.
            <br />
            <br />
            Exercitation sit ex consectetur sunt officia nostrud excepteur.
            Ullamco ea veniam non in ex dolore sint. Officia aliqua sunt eu
            labore eiusmod esse labore et. Consequat adipisicing eiusmod id
            dolore Lorem enim ullamco laboris mollit nostrud quis. Exercitation
            culpa id id elit deserunt sit. Enim proident consequat consequat
            proident. Dolor cupidatat elit labore laborum esse.
          </Content>
        </InfoContainer>
        <ImageContainer>
            <Image src={CoverImage} alt="cover image" />
        </ImageContainer>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default AboutMe;
