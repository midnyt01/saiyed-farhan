import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CoverImage from "../../assets/sales-banner.jpg";
import BlogComments from "../blog-comments/blog-comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Conversion from "../../assets/icons/conversion.png";
import Growth from "../../assets/icons/growth.png";
import Sale from "../../assets/icons/payment-method.png";
import PotentialCustomer from "../../assets/icons/rating.png";
import Seo from "../../assets/icons/seo.png";
import Ad from "../../assets/icons/ad.png";
import Marketing from "../../assets/icons/social-media.png";
import CustomerRelation from "../../assets/icons/customer-relationship-management.png";
import Metrics from "../../assets/icons/optimization.png";
import Revenue from "../../assets/icons/sales_2.png";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  flex: 8;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const ServiceIntro = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CoverImageContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  img {
    width: 90%;
    height: auto;
  }
`;

const BlogHeadContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const BlogHeading = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
`;

const HR = styled.hr`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  background: lightgrey;

`;
const ServiceIconWrapper = styled.div`
  img {
    width: 100px;
  }
`;

const ContentContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
`;
const ContentHeading = styled.h2`
  font-size: 20px;
  text-transform: capitalize;
`;

const PageContentBold = styled.div`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

const PageSubContent = styled.div`
  margin-left: 40px;
`;

const QuoteIcon = styled.span`
  svg {
    width: 60px;
    font-size: 36px;
  }
`;

const ServicesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  row-gap: 30px;
  column-gap: 20px;
  margin-top: 50px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentContainerCard = styled.div`
  min-height: 300px;
  background-color: #282828;
  border-radius: 2px;
  text-align: center;
  padding: 8px;
`;

const CardIconWrapper = styled.div`
  img {
    width: 100px;
    height: 100px;
    padding: 10px;
  }
`;

const ContentCardHeading = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding: 5px 0 5px 0;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #fff;
  padding: 8px 0 8px 0;
`;

const MobileCtaContainer = styled.div`
  width: 75%;
  height: 120px;
  margin: 35px auto;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  a {
    background-color: #95de4c;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    padding: 10px;
  }
`;


const SalesComponent = () => {
  return (
    <Container>
      <BlogHeadContainer>
        <BlogHeading>
          Branding Your Business: Digital Marketing Branding Service
        </BlogHeading>
      </BlogHeadContainer>
      <HR />
      <Head>
        <title>Online Sales Via Digital Marketing Branding Service</title>
        <meta name="description" content="Sales" />
      </Head>
      <Wrapper>
        <ServiceIntro>
          <CoverImageContainer>
            <Image
              src={CoverImage}
              alt="blog cover image"
              width={100}
              height={100}
              unoptimized
            />
          </CoverImageContainer>
          <ContentContainer>
            <PageContentBold>
            <QuoteIcon><FontAwesomeIcon icon={faQuoteLeft} /></QuoteIcon>As a business owner, the ultimate goal is to increase sales and revenue. In today's digital age, digital marketing is an essential component of achieving that goal. Digital marketing encompasses a wide range of tactics and strategies that can help you reach a larger audience, drive traffic to the website, and ultimately increase the sales. 
            </PageContentBold>
          </ContentContainer>
        </ServiceIntro>
        <ContentContainer>
          <ContentHeading>
            Understanding the Sales Funnel
          </ContentHeading>
          <PageContent>
          The sales funnel is a journey that a potential customer goes through before making a purchase. It consists of four stages: awareness, interest, decision, and action.
          </PageContent>
          <PageContent>
            <ServiceIconWrapper>
              <Image
                src={Growth}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </ServiceIconWrapper>
            <PageSubContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Branding Stage: </b>
              At the top of the funnel is the awareness stage. This is where potential customers become aware of your brand and what you offer.
              </h3>
            </PageSubContent>
          </PageContent>

          <PageContent>
            <ServiceIconWrapper>
              <Image
                src={PotentialCustomer}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </ServiceIconWrapper>
            <PageSubContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Curiosity Stage: </b>
              The next stage is the interest stage, where potential customers start to research your products or services.
              </h3>
            </PageSubContent>
          </PageContent>

          <PageContent>
            <ServiceIconWrapper>
              <Image
                src={Conversion}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </ServiceIconWrapper>
            <PageSubContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Intent Stage: </b>
              The decision stage is where potential customers are ready to make a purchase.
              </h3>
            </PageSubContent>
          </PageContent>

          <PageContent>
            <ServiceIconWrapper>
              <Image
                src={Sale}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </ServiceIconWrapper>
            <PageSubContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Conversion Stage: </b>
              This is the action stage is where they actually make the purchase.
              </h3>
            </PageSubContent>
          </PageContent>
        </ContentContainer>

        <ServicesGrid>
          <ContentContainerCard>
            <CardIconWrapper>
                <Image
                  src={Seo}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
              </CardIconWrapper>
            <ContentCardHeading>
              Generating Online Sales Via SEO
            </ContentCardHeading>
            <CardContent>
              Search engine optimization (SEO) is the process of optimizing your website to rank higher in search engine results pages (SERPs). When potential customers search for keywords related to your business, you want your website to appear at the top of the search results.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <CardIconWrapper>
              <Image
                src={Ad}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </CardIconWrapper>
            <ContentCardHeading>
            Google Ads for Online Sales
            </ContentCardHeading>
            <CardContent>
            Google Ads is an online advertising platform that allows you to create and display ads to potential customers who are actively searching for products or services related to your business. Google Ads can be a powerful tool for increasing online sales, but it's important to create effective ad campaigns that target the right audience and use the right keywords.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <CardIconWrapper>
              <Image
                src={Marketing}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </CardIconWrapper>
            <ContentCardHeading>
              Social Media Ads for Increasing Online Sales
            </ContentCardHeading>
            <CardContent>
              Social media advertising is another effective way to increase online sales. Social media platforms like Facebook, Instagram, and Twitter allow you to create and display ads to a highly targeted audience. However, it's important to use best practices and strategies to ensure that your social media ads are effective.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <CardIconWrapper>
              <Image
                src={CustomerRelation}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </CardIconWrapper>
            <ContentCardHeading>
              Retargeting and Remarketing: How to Bring Back Potential Customers
            </ContentCardHeading>
            <CardContent>
              Retargeting and remarketing are tactics that allow you to bring back potential customers who have visited your website but did not make a purchase. Retargeting and remarketing use cookies to track website visitors and display targeted ads to them on other websites or social media platforms.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <CardIconWrapper>
              <Image
                src={Metrics}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
            </CardIconWrapper>
            <ContentCardHeading>
              Conversion Rate Optimization:
            </ContentCardHeading>
            <CardContent>
              Conversion rate optimization (CRO) is the process of optimizing your website to increase the percentage of visitors who take a desired action, such as making a purchase or filling out a form. CRO is an essential component of digital marketing because it can help you increase your sales without increasing your website traffic.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <CardIconWrapper>
              <Image
                src={Revenue}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
              </CardIconWrapper>
            <ContentCardHeading>
              Key Metrics to Track for Increased Sales and Revenue
            </ContentCardHeading>
            <CardContent>
              To ensure that your digital marketing efforts are effective, it's important to track key metrics that are indicative of increased sales and revenue. Some key metrics to track include website traffic, conversion rate, average order value, and customer lifetime value.
            </CardContent>
          </ContentContainerCard>
        </ServicesGrid>

        <MobileCtaContainer>
          <Link href="/">Request a quote</Link>
        </MobileCtaContainer>

        <ContentContainer>
          <PageContent>
            Website traffic is an important metric because it indicates how many potential customers are visiting your website. Conversion rate is an important metric because it indicates how many of those visitors are taking a desired action, such as making a purchase. Average order value and customer lifetime value are important metrics because they indicate how much revenue each customer is generating for your business.
          </PageContent>

          <PageContent>
            By tracking these key metrics, you can identify areas for improvement and make adjustments to your digital marketing efforts as needed.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            My Final Word
          </ContentHeading>
          <PageContent>
          Digital marketing is an essential component of increasing sales and revenue in today's digital age. By understanding the sales funnel, optimizing the website for conversions, creating effective ad campaigns, and continually monitoring and optimizing your digital marketing efforts, sales and revenue can be increased.
          </PageContent> 
        </ContentContainer>

        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default SalesComponent;
