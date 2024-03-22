import Image from "next/image";
import MainLogo from "../../assets/2.png"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";


const Container = styled.div`
    width: 100%;
    margin-top: 70px;
    background: #000;
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
        height: 350px;
    }
`;

const MainContainer = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 800px) { 
        width: 100%;
     }

`;

const LogoContainer = styled.div`
    @media (max-width: 800px) {    
        width: 100%;
        margin: auto;
        text-align:center;
    }
`;

const LogoTitle = styled.div`
    font-size: 25px;
    color: white;
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
    margin-top: 10px;
    @media (min-width: 800px) {
        grid-template-columns: repeat(5, 1fr);
        margin-left: 100px;
            
    }
`;

const SectionWrapper = styled.div``;
const NewsletterWrapper = styled.div`
        grid-column: 1 / 3;
        width: 100%;
        margin: auto;
    @media (min-width: 800px) {
        grid-column: unset;
    }
`;

const LinkHeader = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    color: white;
`;

const LinkItem = styled(Link)`
    font-size: 16px;
    color: lightgray !important;
    margin: 10px 0;
    letter-spacing: 0.5px;
    cursor: pointer;
    display: block;
`;

const NewsletterInput = styled.input`
    border: 1px solid white;
    box-sizing: border-box;
    padding: 5px;
    background: transparent;
    color: white;
    margin: 5px auto;
    padding: 12px;
    width:70%;
    @media (min-width: 800px) {
        width: 98%;
        margin-top: 15px;
    }
`;

const NewsletterSubmit = styled.button`
    border: none;
    box-sizing: border-box;
    padding: 10px 35px;
    margin: 15px auto;
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
                    <LinkItem href="tel:+918767609584"> 
                    Online Markting Consultant +91-8767609584
                    </LinkItem>
                </LogoContainer>
            </MainContainer>
            <ExtraLinksContainer>
                <SectionWrapper>
                    <LinkHeader>Quick Links</LinkHeader>
                    <LinkItem href="/saiyed-farhan"> About Me</LinkItem>
                    <LinkItem href="/casestudies"> Case Studies</LinkItem>
                    <LinkItem href="/blogs"> Blogs</LinkItem>
                    {/* <LinkItem href="digital-marketing-services/branding"> Services</LinkItem> */}
                    {/* <LinkItem href="/contact-me"> Contact Me</LinkItem> */}
                </SectionWrapper>

                {/* <SectionWrapper>
                    <LinkHeader>Services</LinkHeader>
                    <LinkItem href="/digital-marketing-services/branding"> Branding</LinkItem>
                    <LinkItem href="/digital-marketing-services/sales"> Sales</LinkItem>
                    <LinkItem href="/digital-marketing-services/traffic"> Traffic</LinkItem>
                    <LinkItem href="/digital-marketing-services/leads"> Leads</LinkItem>
                </SectionWrapper> */}

                {/* <SectionWrapper>
                    <LinkHeader>More Servies</LinkHeader>
                    <LinkItem href="/digital-marketing-services/traffic"> LOCAL SEO</LinkItem>
                    <LinkItem href="/digital-marketing-services/traffic"> SERP SEO</LinkItem>
                </SectionWrapper> */}

                <SectionWrapper>
                    <LinkHeader>Policies</LinkHeader>
                    <LinkItem href="/"> Terms & Conditions</LinkItem>
                </SectionWrapper>

                {/* <NewsletterWrapper>
                    <LinkHeader>Signup for Newsletter</LinkHeader>
                    <NewsletterInput placeholder="Enter Your Email" />
                    <br></br>
                    <NewsletterSubmit>Submit</NewsletterSubmit>
                </NewsletterWrapper> */}
            </ExtraLinksContainer>
        </Wrapper>
        <HR />
        <LinkItem href="/" style={{width: '85%', margin: 'auto', marginTop: '20px'}} >Design & Developed by Nitrosk- Web & AI Solutions</LinkItem>
    </Container>
  )
}

export default Footer