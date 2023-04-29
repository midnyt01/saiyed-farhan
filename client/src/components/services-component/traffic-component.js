import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CoverImage from "../../assets/cover_image.jpg";
import BlogComments from "../blog-comments/blog-comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  flex: 8;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const CoverImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
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
  font-size: 40px;
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
  font-size: 25px;
  text-transform: capitalize;
`;

const PageContent = styled.div`
  margin-top: 15px;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const KeyPointsContainer = styled.div`
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
  width: 95%;
  margin: auto;
  margin-top: 40px;
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-top: 7px;
`;

const TrafficComponent = () => {
  return (
    <Container>
      <Wrapper>
        <CoverImageContainer>
          <Image
            src={CoverImage}
            alt="blog cover image"
            width={100}
            height={100}
            unoptimized
          />
        </CoverImageContainer>
        <BlogHeadContainer>
          <BlogHeading>
            Increase Website Traffic Via Digital Marketing Service
          </BlogHeading>
        </BlogHeadContainer>
        <HR />
        <ContentContainer>
          <PageContent>
            As a digital marketer, I can confidently say that website traffic is
            the backbone of any online business. The more traffic a website has,
            the more opportunities it has to generate leads, increase sales, and
            establish brand awareness.
          </PageContent>
        </ContentContainer>

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
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px'}}><b>Direct Traffic </b>
               refers to visitors who come to your website by typing your URL directly into their browser. These visitors are already familiar with your brand and are intentionally seeking out your website.
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px', margin: ''}}><b>Organic Traffic</b>
              refers to visitors who come to your website through search engines like Google. These visitors find your website by searching for relevant keywords and clicking on your website's link in the search results.
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px'}}><b>Referral Traffic</b>
              refers to visitors who come to your website through links on other websites. These visitors are referred to your website by other websites that link to your content.
              </h3>
            </PageContent>
            <PageContent>
            Understanding the different types of traffic is essential because it helps you identify where your traffic is coming from and how you can optimize your website to attract more visitors.
            </PageContent>
        </ContentContainer>

        
        <ContentContainer>
          <ContentHeading>
          The Role of SEO in Increasing Website Traffic
          </ContentHeading>
          <PageContent>
          SEO is the process of optimizing your website to rank higher on search engine results pages. It involves a combination of on-page and off-page optimization techniques that help search engines understand what your website is about and how relevant it is to search queries.
          </PageContent>
          <PageContent>
          One of the primary ways to increase website traffic through SEO is by optimizing your website's content for relevant keywords. Keyword research is the process of identifying the keywords that your target audience is searching for and optimizing your website's content to rank for those keywords.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
          The Power of Social Media Ads in Boosting Website Traffic
          </ContentHeading>
          <PageContent>
          Social media advertising is another effective way to increase website traffic. Platforms like Facebook, Instagram, and Twitter allow you to target users based on their demographics, interests, and behaviours.

          </PageContent>
          <PageContent>
          One of the primary benefits of social media advertising is that it allows you to create highly engaging ads that are tailored to your target audience. You can use images, videos, and other multimedia elements to capture users' attention and encourage them to visit your website.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Measuring and Analyzing Website Traffic
          </ContentHeading>
          <PageContent>
          Measuring and analyzing website traffic is essential for understanding how your website is performing and identifying areas for improvement. Google Analytics is a free tool that allows you to track your website's traffic, behavior, and conversions.

          </PageContent>
          <PageContent>
          To measure your website's traffic, you need to set up Google Analytics on your website and configure your tracking code. Once you have set up your tracking, you can view your website's traffic data in real-time and track your website's performance over time.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
          Some of the key metrics that you should track include:
          </ContentHeading>
          <KeyPointsContainer>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Total website traffic
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Traffic sources
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Bounce rate
            </KeyPoint>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Time on site
            </KeyPoint>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Pages per session
            </KeyPoint>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Conversion rate
            </KeyPoint>
          </KeyPointsContainer>
          <PageContent>
          By analyzing these metrics, you can identify areas for improvement and optimize your website to attract more visitors and drive more conversions.
          </PageContent>

        </ContentContainer>
        <ContentContainer>
          <ContentHeading>
            Common Mistakes to Avoid When Trying to Increase Website Traffic
          </ContentHeading>
            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px'}}><b>Focusing on quantity over quality:  </b>
              It's essential to attract high-quality traffic to your website that is relevant to your brand and your target audience. Focusing on quantity over quality can lead to a high bounce rate and low conversion rates
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px', margin: ''}}><b>Neglecting SEO: </b>
              SEO is a long-term strategy that takes time and effort to implement. Neglecting SEO can lead to poor search engine rankings and a lack of organic traffic.
              </h3>
            </PageContent>

            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px'}}><b>Ignoring mobile optimization: </b>
              Mobile optimization is essential for providing a seamless user experience on mobile devices. Ignoring mobile optimization can lead to a high bounce rate and a lack of mobile traffic.
              </h3>
            </PageContent>
            <PageContent>
              <h3 style={{fontWeight: '400', fontSize: '18px', letterSpacing: '1.2px'}}><b>Not tracking your results: </b>
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
