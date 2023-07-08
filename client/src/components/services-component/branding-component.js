import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import BlogComments from "../blog-comments/blog-comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import CoverImage from "../../assets/branding-banner.jpg";
import Serviceimg from "../../assets/icons/target-audience.png";
import Serviceimg1 from "../../assets/icons/lightbulb.png";
import Serviceimg2 from "../../assets/icons/business.png";

const Container = styled.div`
  flex: 8;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 800px) {
    width: 90%;
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

const ServiceIntro = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
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

const ContentContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
`;
const ContentHeading = styled.h2`
  font-size: 18px;
  text-transform: capitalize;
`;

const PageContent = styled.div`
  margin-top: 15px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.4;
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
  min-height: 400px;
  background-color: #282828;
  border-radius: 2px;
  text-align: center;
  padding: 8px;
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

const KeyPointsContainer = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #fff;
  line-height: 1.4;
  width: 95%;
  margin: auto;
  margin-top: 15px;
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-top: 7px;
  justify-content: left;
  text-align: left;
  svg {
    color: #95de4c;
  }
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse == 'reverse' ? 'column-reverse': 'column'};
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const SubContent = styled.div`
  width: 97%;
`;

const SubContentImg = styled.div`
  width: 50%;
  margin: 20px auto;
  @media (min-width: 800px) {
    width: 20%;
    margin: auto;
  }
`;
const SubContentImgMobile = styled.div`
  display: none;
  width: 20%;
  @media (max-width: 800px) {
    width: 50%;
    margin: auto;
    display: block;
  }
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
  // }
`;

const BrandingComponent = () => {
  return (
    <Container>
      <Wrapper>
        <BlogHeadContainer>
          <BlogHeading>
            Branding Your Business: Digital Marketing Branding Service
          </BlogHeading>
        </BlogHeadContainer>
        <HR />
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
            <ContentHeading>
              The Importance of Online Branding in 21st Century
            </ContentHeading>
            <PageContent>
              Online branding is an essential area to do better in 21st century.
              With more and more people using the internet to buy products and
              avail services, having a strong online presence can help
              businesses reach a wider audience. Online branding can also help
              to establish brand loyalty and trust among customers.
            </PageContent>
            <PageContent>
              A business having a strong brand identity means customers are more
              likely to remember and recommend the business to others.
            </PageContent>
            <PageContent>
              Moreover, online branding is more cost-effective than traditional
              branding methods. Traditional methods, such as print advertising,
              can be expensive and have a limited reach. On the other hand,
              digital marketing allows businesses to reach a wider audience at a
              lower cost.
            </PageContent>
          </ContentContainer>
        </ServiceIntro>
        <ContentContainer>
          <PageContent>
            In today's digital age, online branding is vital for any business's
            success. Building a strong brand identity can set a business apart
            from its competitors and create a lasting impression on customers.
            Online branding refers to the process of creating a brand identity
            through digital platforms, such as social media, search engines, and
            website design
          </PageContent>
        </ContentContainer>

        <ServicesGrid>
          <ContentContainerCard>
            <ContentCardHeading>
              Creating a Strong Brand Identity Through Digital Branding
              Campaigns
            </ContentCardHeading>
            <CardContent>
              Digital branding services can help businesses create a strong
              brand identity through various digital platforms. These platforms
              include -
            </CardContent>
            <KeyPointsContainer>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Google Ads (Search, Display, YouTube, Emails)
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Social Media Management (Organic & Paid Ads)
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Search Engine Optimization (Local & Broad).
              </KeyPoint>
            </KeyPointsContainer>
            <CardContent>
              <b>Note:</b> Website design / App design is an important aspect of
              digital branding. A well-designed website / app can help to
              establish a business's brand identity and create a positive user
              experience.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <ContentCardHeading>Branding Through Google Ads</ContentCardHeading>
            <CardContent>
              Google Ads is a powerful tool for branding. With Google Ads,
              businesses can create targeted campaigns to reach their ideal
              audience. It allows businesses to target users based on various
              factors, such as location, interests, and search history.
            </CardContent>
            <CardContent>
              Google Ads gives various platforms to target the users:
            </CardContent>
            <KeyPointsContainer>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Partnered Websites: Display Ads
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                YouTube: Video Ads
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Email: Discovery Ads
              </KeyPoint>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Search Engine: Search Ads, <br />
                Shopping Ads (ECom)
              </KeyPoint>
            </KeyPointsContainer>
          </ContentContainerCard>

          <ContentContainerCard>
            <ContentCardHeading>
              Building Your Brand on Social Media
            </ContentCardHeading>
            <CardContent>
              Social media is a powerful tool for building a brand identity.
              Businesses can use social media to engage with customers, create
              targeted campaigns, and promote their products or services.
            </CardContent>
            <CardContent>
              There are many Social Media platforms available today. Following
              are the most active and famous platforms:
            </CardContent>
            <KeyPointsContainer>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Meta (FB & Instagram)
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Twitter
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                LinkedIn
              </KeyPoint>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Pinterest
              </KeyPoint>
            </KeyPointsContainer>
          </ContentContainerCard>

          <ContentContainerCard>
            <ContentCardHeading>
              Branding Through SEO: How to Rank High on Search Engines
            </ContentCardHeading>
            <CardContent>
              SEO is an important aspect of online branding. By optimizing the
              website for search engines, businesses can increase their
              visibility and reach a wider audience in an organic way.
            </CardContent>
            <CardContent>
              There are many Social Media platforms available today. Following
              are the most active and famous platforms:
            </CardContent>
            <KeyPointsContainer>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                There two types in SEO based on the nature of the business:
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Local SEO: For business serving to a limited radius
              </KeyPoint>

              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Measuring the Effectiveness of Your Online Branding Efforts
              </KeyPoint>
              <KeyPoint>
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                Measuring the Effectiveness of Your Online Branding Efforts
              </KeyPoint>
              <KeyPoint>
                Measuring the effectiveness of online branding efforts is
                essential for improving future campaigns. I use various tools,
                such as Google Analytics, Google Search Console, Semrush,
                SERPRobot to track website traffic, engagement, and conversions.
              </KeyPoint>
            </KeyPointsContainer>
          </ContentContainerCard>
        </ServicesGrid>

        <MobileCtaContainer>
          <Link href="/">Request a quote</Link>
        </MobileCtaContainer>
        <ContentContainer>
          <BottomContent reverse="column">
            <SubContentImg>
              <Image src={Serviceimg} alt="branding image" />
            </SubContentImg>
            <SubContent>
              <ContentHeading>
                Understanding Your Target Audience for Effective Online Branding
              </ContentHeading>
              <PageContent>
                To create an effective online branding strategy, you as a
                business owner must first understand thetarget audience. Knowing
                who your target audience is and what they are interested in can
                help to create targeted campaigns that resonate with them.
              </PageContent>
              <PageContent>
                This is where my expertise comes in - I use various tools and
                tactics to gain insights into the target audience's behavior and
                preferences. Additionally, conducting surveys and focus groups
                can help to gain a deeper understanding of the target audience.
              </PageContent>
            </SubContent>
          </BottomContent>
        </ContentContainer>
        <ContentContainer>
          <BottomContent reverse="reverse">
              <SubContent>
              <ContentHeading>
                My Tip: Common Online Branding Mistakes to Avoid
              </ContentHeading>
              <PageContent>
                There are several common online branding mistakes that
                businesses should avoid. One mistake is not having a clear brand
                message. Businesses must ensure that their brand message is
                consistent across all digital platforms. Another mistake is not
                engaging with customers on social media. Engaging with customers
                can help to build brand loyalty and increase customer
                satisfaction.
              </PageContent>
              <PageContent>
                Another mistake is not optimizing their website for search
                engines. By neglecting SEO, businesses may be missing out on
                potential customers. Finally, businesses must avoid being too
                sales-focused in their online branding efforts. Customers want
                to engage with businesses that provide value and solve their
                problems, not just sell products or services.
              </PageContent>
              </SubContent>
            <SubContentImg>
              <Image src={Serviceimg1} alt="branding image" />
            </SubContentImg>
          </BottomContent>
        </ContentContainer>

        <ContentContainer>
          <BottomContent reverse="column">
            <SubContentImg>
              <Image src={Serviceimg2} alt="branding image" />
            </SubContentImg>
            <SubContent>
              <ContentHeading>
                My Prediction: The Future of Online Branding in Digital
                Marketing
              </ContentHeading>
              <PageContent>
                The future of online branding is promising. With advancements in
                technology, businesses will have even more opportunities to
                reach their target audience through various digital platforms.
                Additionally, businesses may use artificial intelligence (AI) to
                create more personalized and targeted campaigns.
              </PageContent>
            </SubContent>
          </BottomContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>My Final Word</ContentHeading>
          <PageContent>
            In conclusion, online branding is essential for any business's
            success in today's digital age. By creating a strong brand identity
            through digital platforms, businesses can increase their visibility,
            reach a wider audience, and establish brand loyalty.
          </PageContent>
        </ContentContainer>

        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default BrandingComponent;
