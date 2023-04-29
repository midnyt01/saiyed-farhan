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
  width: 100%;
  margin: auto;
  @media (min-width: 800px) {
    width: 90%;
  }
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
  font-size: 30px;
  @media (min-width: 800px) {
    font-size: 40px;
  }
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
  margin-top: 15px;
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-top: 7px;
`;

const BrandingComponent = () => {
  return (
    <Container>
      <Head>
        <title>Branding Page</title>
        <meta name="description" content="Branding Page" />
      </Head>
      <Wrapper>
        <CoverImageContainer>
          <Image
            src={CoverImage}
            alt="blog cover image"
            width={100}
            height={100}
          />
        </CoverImageContainer>
        <BlogHeadContainer>
          <BlogHeading>
            Branding Your Business: Digital Marketing Branding Service
          </BlogHeading>
        </BlogHeadContainer>
        <HR />
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
        <ContentContainer>
          <ContentHeading>
            The Importance of Online Branding in 21st Century
          </ContentHeading>
          <PageContent>
            Online branding is an essential area to do better in 21st century.
            With more and more people using the internet to buy products and
            avail services, having a strong online presence can help businesses
            reach a wider audience. Online branding can also help to establish
            brand loyalty and trust among customers.
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

        <ContentContainer>
          <ContentHeading>
            Understanding Your Target Audience for Effective Online Branding
          </ContentHeading>
          <PageContent>
            To create an effective online branding strategy, you as a business
            owner must first understand thetarget audience. Knowing who your
            target audience is and what they are interested in can help to
            create targeted campaigns that resonate with them.
          </PageContent>
          <PageContent>
            This is where my expertise comes in - I use various tools and
            tactics to gain insights into the target audience's behavior and
            preferences. Additionally, conducting surveys and focus groups can
            help to gain a deeper understanding of the target audience.
          </PageContent>
        </ContentContainer>
        <ContentContainer>
          <ContentHeading>
            Creating a Strong Brand Identity Through Digital Branding Campaigns
          </ContentHeading>
          <PageContent>
            Digital branding services can help businesses create a strong brand
            identity through various digital platforms. These platforms include
            -
          </PageContent>
          <KeyPointsContainer>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Google Ads (Search, Display, YouTube, Emails)
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Social Media Management (Organic & Paid Ads)
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Search Engine Optimization (Local & Broad).
            </KeyPoint>
          </KeyPointsContainer>
          <PageContent>
          <b>Note:</b> Website design / App design is an important aspect of digital branding. A well-designed website / app can help to establish a business's brand identity and create a positive user experience.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Branding Through Google Ads
          </ContentHeading>
          <PageContent>
          Google Ads is a powerful tool for branding. With Google Ads, businesses can create targeted campaigns to reach their ideal audience. It allows businesses to target users based on various factors, such as location, interests, and search history.
          </PageContent>
          <PageContent>
          Google Ads gives various platforms to target the users:
          </PageContent>
          <KeyPointsContainer>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Partnered Websites: Display Ads
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              YouTube: Video Ads
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Email: Discovery Ads
            </KeyPoint>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
                Search Engine: Search Ads, Shopping Ads (ECom)
            </KeyPoint>
          </KeyPointsContainer>

        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
          Building Your Brand on Social Media
          </ContentHeading>
          <PageContent>
          Social media is a powerful tool for building a brand identity. Businesses can use social media to engage with customers, create targeted campaigns, and promote their products or services.
          </PageContent>
          <PageContent>
          There are many Social Media platforms available today. Following are the most active and famous platforms:
          </PageContent>
          <KeyPointsContainer>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Meta (FB & Instagram)
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Twitter
            </KeyPoint>

            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              LinkedIn
            </KeyPoint>
            <KeyPoint>
              <FontAwesomeIcon icon={faCheck} size="xl" />
              Pinterest
            </KeyPoint>
          </KeyPointsContainer>

        </ContentContainer>

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
        <ContentContainer>
          <ContentHeading>
            Branding Through SEO: How to Rank High on Search Engines
          </ContentHeading>
          <PageContent>
          SEO is an important aspect of online branding. By optimizing the website for search engines, businesses can increase their visibility and reach a wider audience in an organic way.
          </PageContent>
          <PageContent>
          There two types in SEO based on the nature of the business:</PageContent>
          <PageContent>
            Local SEO: For business serving to a limited radius
          </PageContent>
          <PageContent>
          SERP SEO: Sometimes also called as Global SEO or just SEO, it is suited for the business serving without the geo-limits or broader radius (state, city).
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
          Measuring the Effectiveness of Your Online Branding Efforts
          </ContentHeading>
          <PageContent>
          Measuring the effectiveness of online branding efforts is essential for improving future campaigns. I use various tools, such as Google Analytics, Google Search Console, Semrush, SERPRobot to track website traffic, engagement, and conversions.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            My Tip: Common Online Branding Mistakes to Avoid
          </ContentHeading>
          <PageContent>
          There are several common online branding mistakes that businesses should avoid. One mistake is not having a clear brand message. Businesses must ensure that their brand message is consistent across all digital platforms. Another mistake is not engaging with customers on social media. Engaging with customers can help to build brand loyalty and increase customer satisfaction.
          </PageContent>
          <PageContent>
          Another mistake is not optimizing their website for search engines. By neglecting SEO, businesses may be missing out on potential customers. Finally, businesses must avoid being too sales-focused in their online branding efforts. Customers want to engage with businesses that provide value and solve their problems, not just sell products or services.
          </PageContent>  
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
          My Prediction: The Future of Online Branding in Digital Marketing
          </ContentHeading>
          <PageContent>
          The future of online branding is promising. With advancements in technology, businesses will have even more opportunities to reach their target audience through various digital platforms. Additionally, businesses may use artificial intelligence (AI) to create more personalized and targeted campaigns.
          </PageContent> 
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            My Final Word
          </ContentHeading>
          <PageContent>
          In conclusion, online branding is essential for any business's success in today's digital age. By creating a strong brand identity through digital platforms, businesses can increase their visibility, reach a wider audience, and establish brand loyalty.
          </PageContent> 
        </ContentContainer>

        {/* <KeyPointsContainer>
          <KeyPoint>
            <FontAwesomeIcon icon={faCheck} size="xl" />
            Lorem ipsum dolor
          </KeyPoint>

          <KeyPoint>
            <FontAwesomeIcon icon={faCheck} size="xl" />
            Lorem ipsum dolor
          </KeyPoint>

          <KeyPoint>
            <FontAwesomeIcon icon={faCheck} size="xl" />
            Lorem ipsum dolor
          </KeyPoint>
        </KeyPointsContainer> */}

        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default BrandingComponent;
