import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CoverImage from "../../assets/traffice-banner.jpg";
import BlogComments from "../blog-comments/blog-comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import Direct from "../../assets/icons/next.png";
import Organic from "../../assets/icons/organic-content.png";
import Refer from "../../assets/icons/network.png";

import Traffic from "../../assets/icons/traffic-light.gif";
import TrafficSources from "../../assets/icons/directions.gif";
import Bounce from "../../assets/icons/bounce.gif";
import Time from "../../assets/icons/time.gif";
import Pages from "../../assets/icons/duration.gif";
import Conversion from "../../assets/icons/social-care.gif";

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

const PageContentBold = styled.div`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

const QuoteIcon = styled.span`
  svg {
    width: 60px;
    font-size: 36px;
  }
`;

const ServiceIconWrapper = styled.div`
  img {
    width: 100px;
  }
`;

const PageSubContent = styled.div`
  margin-left: 40px;
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

const CardContent = styled.p`
  font-size: 14px;
  color: #fff;
  padding: 8px 0 8px 0;
`;

const ContentCardHeading = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding: 5px 0 5px 0;
`;

const ContentHeading = styled.h2`
  font-size: 20px;
  text-transform: capitalize;
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

const KeyPointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 95%;
  margin: auto;
  margin-top: 40px;
  background: #FFF;
  padding: 12px;
  border-radius: 3px;
`;

const KeyPoint = styled.div`
  margin-top: 7px;
`;

const AnimatedIconText = styled.p`
  color: #fff;
  background: #2e2e2e;
  padding: 6px;
  text-align: center;
  border-radius: 2px;
  font-weight: 600;
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

const TrafficComponent = () => {
  return (
    <Container>
      <Head>
        <title>Traffic Page</title>
        <meta name="description" content="Traffic Page" />
      </Head>
        <BlogHeadContainer>
          <BlogHeading>
            Increase Website Traffic Via Digital Marketing Service
          </BlogHeading>
        </BlogHeadContainer>
        <HR />
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
          <ContentHeading>Importance of Website Traffic</ContentHeading>
          <PageContent>
            Website traffic refers to the number of visitors that come to your
            website. It is an essential metric that determines the success of
            your online business. Without traffic, your website will not have
            any visitors, and thus, no conversions or sales. On the other hand,
            a high volume of traffic indicates that your website is popular,
            relevant, and trustworthy.
          </PageContent>
          <PageContent>
            Website traffic is also crucial for search engine optimization
            (SEO). Search engines like Google use traffic as a ranking factor.
            The more traffic your website has, the higher it will rank on search
            engine results pages (SERPs). This means that if you want to improve
            your website's visibility, you need to focus on increasing your
            traffic.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Top Reasons To Need More Traffic on Your Website
          </ContentHeading>
          <PageContent>
            There are several reasons why you need more traffic on your website.
            First and foremost, more traffic means more potential customers. The
            more people that visit your website, the more likely you are to make
            a sale. This is especially true if you have an e-commerce website or
            offer online services.
          </PageContent>
          <PageContent>
            In addition, more traffic also means more brand awareness. When
            people visit your website, they become familiar with your brand and
            what you have to offer. This can lead to word-of-mouth referrals and
            social media shares, which can further increase your traffic and
            brand exposure.
          </PageContent>

          <PageContent>
            Finally, more traffic can also lead to better SEO. As mentioned
            earlier, search engines use traffic as a ranking factor. So, if you
            want to improve your website's position on SERPs, you need to focus
            on increasing your traffic.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Understanding the Different Types of Website Traffic
          </ContentHeading>
          <PageContent>
          Not all website traffic is created equal. There are three main types of website traffic: direct traffic, organic traffic, and referral traffic.
          </PageContent>
            <PageContent>
              <ServiceIconWrapper>
                <Image
                  src={Direct}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
              </ServiceIconWrapper>
              <PageSubContent>
                <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Direct Traffic: </b>
               refers to visitors who come to your website by typing your URL directly into their browser. These visitors are already familiar with your brand and are intentionally seeking out your website.
                </h3>
              </PageSubContent>
              
            </PageContent>

            <PageContent>
              <ServiceIconWrapper>
                <Image
                  src={Organic}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
              </ServiceIconWrapper>
              <PageSubContent>
                <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px', margin: ''}}><b>Organic Traffic: </b>
                refers to visitors who come to your website through search engines like Google. These visitors find your website by searching for relevant keywords and clicking on your website's link in the search results.
                </h3>
              </PageSubContent>
            </PageContent>

            <PageContent>
              <ServiceIconWrapper>
                <Image
                  src={Refer}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
              </ServiceIconWrapper>
              <PageSubContent>
                <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Referral Traffic: </b>
                refers to visitors who come to your website through links on other websites. These visitors are referred to your website by other websites that link to your content.
              </h3>
              </PageSubContent>
            
            </PageContent>
            <PageContent>
            Understanding the different types of traffic is essential because it helps you identify where your traffic is coming from and how you can optimize your website to attract more visitors.
            </PageContent>
        </ContentContainer>


        <ServicesGrid>
          <ContentContainerCard>
            <ContentCardHeading>
            The Role of SEO in Increasing Website Traffic
            </ContentCardHeading>
            <CardContent>
              SEO is the process of optimizing your website to rank higher on search engine results pages. It involves a combination of on-page and off-page optimization techniques that help search engines understand what your website is about and how relevant it is to search queries.
            </CardContent>
            <CardContent>
              One of the primary ways to increase website traffic through SEO is by optimizing your website's content for relevant keywords. Keyword research is the process of identifying the keywords that your target audience is searching for and optimizing your website's content to rank for those keywords.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <ContentCardHeading>
            The Power of Social Media Ads in Boosting Website Traffic
            </ContentCardHeading>
            <CardContent>
              Social media advertising is another effective way to increase website traffic. Platforms like Facebook, Instagram, and Twitter allow you to target users based on their demographics, interests, and behaviours.
            </CardContent>
            <CardContent>
              One of the primary benefits of social media advertising is that it allows you to create highly engaging ads that are tailored to your target audience. You can use images, videos, and other multimedia elements to capture users' attention and encourage them to visit your website.
            </CardContent>
          </ContentContainerCard>

          <ContentContainerCard>
            <ContentCardHeading>
            Measuring and Analyzing Website Traffic
            </ContentCardHeading>
            <CardContent>
              Measuring and analyzing website traffic is essential for understanding how your website is performing and identifying areas for improvement. Google Analytics is a free tool that allows you to track your website's traffic, behavior, and conversions.
            </CardContent>
            <CardContent>
              To measure your website's traffic, you need to set up Google Analytics on your website and configure your tracking code. Once you have set up your tracking, you can view your website's traffic data in real-time and track your website's performance over time.
            </CardContent>
          </ContentContainerCard>
        </ServicesGrid>

        <ContentContainer>
          <ContentHeading>
          Some of the key metrics that you should track include:
          </ContentHeading>
          <KeyPointsContainer>
            <KeyPoint>
              <Image
                src={Traffic}
                alt="Icon for Branding Stage"
                width={100}
                height={100}
                unoptimized
              />
              <AnimatedIconText>Total Website Traffic</AnimatedIconText>
            </KeyPoint>

            <KeyPoint>
              <Image
                  src={TrafficSources}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
                <AnimatedIconText>Traffic Sources</AnimatedIconText>
            </KeyPoint>

            <KeyPoint>
              <Image
                  src={Bounce}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
                <AnimatedIconText>Bounce Rate</AnimatedIconText>
            </KeyPoint>
            <KeyPoint>
              <Image
                  src={Time}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
                <AnimatedIconText>Time On Site</AnimatedIconText>
            </KeyPoint>
            <KeyPoint>
              <Image
                  src={Pages}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
                <AnimatedIconText>Pages Per Session</AnimatedIconText>
            </KeyPoint>
            <KeyPoint>
              <Image
                  src={Conversion}
                  alt="Icon for Branding Stage"
                  width={100}
                  height={100}
                  unoptimized
                />
              <AnimatedIconText>Conversion Rate</AnimatedIconText>
            </KeyPoint>
          </KeyPointsContainer>
          <PageContent>
          By analyzing these metrics, you can identify areas for improvement and optimize your website to attract more visitors and drive more conversions.
          </PageContent>

        </ContentContainer>

        <MobileCtaContainer>
          <Link href="/">Request a quote</Link>
        </MobileCtaContainer>

        <ContentContainer>
          <ContentHeading>
            Common Mistakes to Avoid When Trying to Increase Website Traffic
          </ContentHeading>
            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Focusing on quantity over quality:  </b>
              It's essential to attract high-quality traffic to your website that is relevant to your brand and your target audience. Focusing on quantity over quality can lead to a high bounce rate and low conversion rates
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px', margin: ''}}><b>Neglecting SEO: </b>
              SEO is a long-term strategy that takes time and effort to implement. Neglecting SEO can lead to poor search engine rankings and a lack of organic traffic.
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Ignoring mobile optimization: </b>
              Mobile optimization is essential for providing a seamless user experience on mobile devices. Ignoring mobile optimization can lead to a high bounce rate and a lack of mobile traffic.
              </h3>
            </PageContent>
            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '16px', letterSpacing: '1.2px'}}><b>Not tracking your results: </b>
              Tracking your results is essential for optimizing your website and your marketing campaigns over time. Not tracking your results can lead to missed opportunities and wasted resources.
              </h3>
            </PageContent>
            <PageContent>
            Understanding the different types of traffic is essential because it helps you identify where your traffic is coming from and how you can optimize your website to attract more visitors.
            </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            My Final Word
          </ContentHeading>
          <PageContent>
          In conclusion, website traffic is essential for the success of any online business. By increasing the website's traffic, you can generate more leads, increase sales, and establish brand awareness. But, you also need to measure and analyze the website's traffic to identify areas for improvement and avoid common mistakes. With the right strategies and tools, you can increase your website's traffic and achieve your business goals.
          </PageContent> 
        </ContentContainer>

        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default TrafficComponent;
