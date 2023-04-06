import Image from "next/image";
import MainLogo from "../../assets/sf-white.png"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";


const Container = styled.div`
    width: 100%;
    margin-top: 70px;
    background: black;
    box-sizing: border-box;
    padding: 40px 10px;
    @media (min-width: 800px) {
        padding: 70px 10px;
        margin-top: 100px;
}
`;

const Wrapper = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (min-width: 800px) {
        flex-direction: row;
        height: 450px;
    }
`;

const MainContainer = styled.div`
width: 220px;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

const LogoContainer = styled.div``;

const LogoTitle = styled.div`
font-size: 25px;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 0.5px;
margin-top: 10px;
margin-bottom: 10px;
`;

const ExtraLinksContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;
margin-top: 50px;
@media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
    margin-left: 100px;
    margin-top: 115px;
        
}
`;

const SectionWrapper = styled.div``;
const NewsletterWrapper = styled.div`
        grid-column: 1 / 3;
    @media (min-width: 800px) {
        grid-column: unset;
    }
`;

const LinkHeader = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 15px;
letter-spacing: 0.5px;
`;

const LinkItem = styled.div`
font-size: 16px;
color: lightgray;
margin: 10px 0;
letter-spacing: 0.5px;
cursor: pointer;
`;

const NewsletterInput = styled.input`
border: 1px solid white;
box-sizing: border-box;
padding: 5px;
background: transparent;
color: white;
margin-top: 5px;
width:70%;
@media (min-width: 800px) {
    width: 100%;
    margin-top: 15px;
}
`;

const NewsletterSubmit = styled.button`
border: none;
box-sizing: border-box;
padding: 5px 25px;
margin-top: 15px;
font-weight: 400;
letter-spacing: 0.8px;
`;

const HR = styled.hr`
width: 85%;
margin-right: 30px;
box-sizing: border-box;
margin: auto;
margin-top: 30px;
@media (min-width: 800px) {
margin-top: 0;
    }
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <MainContainer>
                <LogoContainer>
                    <Image src={MainLogo} alt="saiyed farhan" width={100} />
                    <LogoTitle>Saiyed<br /> Farhan</LogoTitle>
                    <LinkItem>
                        Lorem ipsum dolore sit amet, consectetur
                    </LinkItem>
                </LogoContainer>
                <div>
                    <FontAwesomeIcon icon={faCopyright} />
                    <LinkItem>Terms & Conditions</LinkItem>
                </div>
            </MainContainer>
            <ExtraLinksContainer>
                <SectionWrapper>
                    <LinkHeader>Quick Links</LinkHeader>
                    <LinkItem>About Me</LinkItem>
                    <LinkItem>Case Studies</LinkItem>
                    <LinkItem>Blogs</LinkItem>
                    <LinkItem>Services</LinkItem>
                    <LinkItem>Contact Me</LinkItem>
                </SectionWrapper>

                <SectionWrapper>
                    <LinkHeader>Services</LinkHeader>
                    <LinkItem>Google Ads</LinkItem>
                    <LinkItem>Meta Ads</LinkItem>
                    <LinkItem>Linkedln Ads</LinkItem>
                </SectionWrapper>

                <SectionWrapper>
                    <LinkHeader>More Servies</LinkHeader>
                    <LinkItem>LOCAL SEO</LinkItem>
                    <LinkItem>SERP SEO</LinkItem>
                </SectionWrapper>

                <SectionWrapper>
                    <LinkHeader>Policies</LinkHeader>
                    <LinkItem>Terms & Conditions</LinkItem>
                </SectionWrapper>

                <NewsletterWrapper>
                    <LinkHeader>Signup for Newsletter</LinkHeader>
                    <NewsletterInput placeholder="Enter Your Email" />
                    <br></br>
                    <NewsletterSubmit>Submit</NewsletterSubmit>
                </NewsletterWrapper>
            </ExtraLinksContainer>
        </Wrapper>
        <HR />
        <LinkItem style={{width: '85%', margin: 'auto', marginTop: '20px'}} >Design & Developed by Nitrosk- Web & AI Solutions</LinkItem>
    </Container>
  )
}

export default Footer