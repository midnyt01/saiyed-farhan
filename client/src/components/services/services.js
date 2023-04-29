import { faBuysellads, faSalesforce } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
  faArrowRightArrowLeft,
  faArrowRightLong,
  faChartLine,
  faCheck,
  faLaptop,
  faTrafficLight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { Slide } from "react-reveal";
import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    margin: auto;
    margin-top: 50px;
    svg.fa-arrow-right, svg.fa-arrow-right-arrow-left, svg.fa-arrow-right-long {
  transition: transform 0.2s ease-in-out;
}

svg.fa-arrow-right:hover, svg.fa-arrow-right-arrow-left:hover, svg.fa-arrow-right-long:hover {
  transform: translateX(7px);
}
`;

const Wrapper = styled.div`
    width: 95%;
    margin: auto;
`;

const Title = styled.h3`
font-size: 22px;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-align: center;
font-weight: 600;
letter-spacing: 1px;
`;

const ServicesContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 70px;
margin-top: 40px;

@media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;

}
`;

const ServiceCard = styled.div`
background-color: #282828;
color: white;
box-sizing: border-box;
padding: 50px;
`;

const ServiceLogo = styled.div``;

const ServiceTitle = styled.div`
margin-top: 7px;
text-transform: uppercase;
font-size: 20px;
font-weight: 600;
`;

const ServiceDescription = styled.div`
font-size: 16px;
font-weight: 100;
margin-top: 20px;
margin-bottom: 15px;
letter-spacing: 2px;
`

const ServiceContent = styled.div`
margin-top: 7px;
width: 90%;
display: flex;
justify-content: flex-start;
font-size: 14px;
font-weight: 100;
`;

const ServiceBottom = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
margin-top: 25px;
`;

const ServiceAction = styled.div`
font-size: 16px;
letter-spacing: 1px;
`;

const ActionContainer = styled.div`
width: 100%;
display: flex;
margin-top: 50px;
justify-content: flex-end;
`;

const Action = styled.div`
padding: 10px;
box-sizing: border-box;
border-radius: 50%;
background: #95de4c;
color: black;
cursor: pointer;
`;

const HR = styled.hr`
width: 90%;
margin: auto;
box-sizing: border-box;
margin-top: 40px;
`


const Services = () => {

  const router = useRouter();

  const handleOnClick = () => {
    router.push('/digital-marketing-services/branding')
  }

  return (
    <Container>
      <Wrapper>
        <Title>Digital Marketing Services</Title>
        <ServicesContainer>
          <Slide bottom>
          <ServiceCard>
            <ServiceLogo><FontAwesomeIcon icon={faLaptop} size="4x" /></ServiceLogo>
            <ServiceTitle>Branding</ServiceTitle>
            <ServiceDescription>
              Aliquip eu et tempor occaecat est. Aliquip eu et tempor. 
            </ServiceDescription>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceBottom>
              <ServiceAction>Continue Reading</ServiceAction>
              <Link href="/digital-marketing-services/branding"><FontAwesomeIcon icon={faArrowRightLong} style={{cursor: 'pointer', color:'white'}} size="xl" /></Link>
            </ServiceBottom>
          </ServiceCard>
          </Slide>

          {/* Service 2  */}
          <Slide bottom>
          <ServiceCard>
            <ServiceLogo><FontAwesomeIcon icon={faChartLine} size="4x" /></ServiceLogo>
            <ServiceTitle>Sales</ServiceTitle>
            <ServiceDescription>
              Aliquip eu et tempor occaecat est. Aliquip eu et tempor.
            </ServiceDescription>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceBottom>
              <ServiceAction>Continue Reading</ServiceAction>
              <Link href="/digital-marketing-services/sales"><FontAwesomeIcon icon={faArrowRightLong} style={{cursor: 'pointer', color:'white'}} size="xl" /></Link>
            </ServiceBottom>
          </ServiceCard>
          </Slide>

          {/* Service 3 */}
          <Slide bottom>
          <ServiceCard>
            <ServiceLogo><FontAwesomeIcon icon={faTrafficLight} size="4x"/></ServiceLogo>
            <ServiceTitle>Traffic</ServiceTitle>
            <ServiceDescription>
              Aliquip eu et tempor occaecat est. Aliquip eu et tempor.
            </ServiceDescription>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceBottom>
              <ServiceAction>Continue Reading</ServiceAction>
              <Link href="/digital-marketing-services/traffic"><FontAwesomeIcon icon={faArrowRightLong} style={{cursor: 'pointer', color:'white'}} size="xl" /></Link>
            </ServiceBottom>
          </ServiceCard>
          </Slide>

          {/* Service 4 */}
          <Slide bottom>
          <ServiceCard>
            <ServiceLogo><FontAwesomeIcon icon={faUsers} size="4x"/></ServiceLogo>
            <ServiceTitle>Leads</ServiceTitle>
            <ServiceDescription>
              Aliquip eu et tempor occaecat est. Aliquip eu et tempor.
            </ServiceDescription>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceContent>
              <FontAwesomeIcon icon={faCheck} style={{marginRight: '12px'}} />
              Lorem ipsum dolor
            </ServiceContent>
            <ServiceBottom>
              <ServiceAction>Continue Reading</ServiceAction>
              <Link href="/digital-marketing-services/leads"><FontAwesomeIcon icon={faArrowRightLong} style={{cursor: 'pointer', color:'white'}} size="xl" /></Link>
            </ServiceBottom>
          </ServiceCard>
          </Slide>
        </ServicesContainer>
        <ActionContainer>
            <Slide left>
            <Action onClick={handleOnClick} >
                <FontAwesomeIcon icon={faArrowRightLong} size="2x" style={{fontWeight: 'bold'}} />
            </Action>
            </Slide>
        </ActionContainer>
        <HR />
      </Wrapper>
    </Container>
  );
};

export default Services;
