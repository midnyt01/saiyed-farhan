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
  font-size: 20px;
  text-transform: capitalize;
`;

const PageContent = styled.div`
  margin-top: 15px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

const KeyPointsContainer = styled.div`
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.4;
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

const LeadsComponent = () => {
  return (
    <Container>
      <Head>
        <title>Leads Page</title>
        <meta name="description" content="Branding Page" />
      </Head>
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
            Generate Online Leads via Digital Marketing Services
          </BlogHeading>
        </BlogHeadContainer>
        <HR />
        <ContentContainer>
          <PageContent>
            As a digital marketing consultant, I have seen firsthand the impact
            that online marketing can have on lead generation. In today's
            digital age, it is essential for businesses to have a strong online
            presence if they want to attract new leads and customers.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Understanding the Importance of Online Reach
          </ContentHeading>
          <PageContent>
            When a business has a strong online presence, it is able to reach a
            much larger audience than it would through traditional marketing
            methods. By leveraging the power of the internet, you can connect
            with potential customers from all over the world, 24/7.
          </PageContent>
          <PageContent>
            To maximize the online reach and generate more leads, you need to
            have a comprehensive digital marketing strategy in place. This means
            leveraging a combination of different tactics, such as SEO, Google
            Ads, social media ads, and lead magnets.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>The Role of SEO in Lead Generation</ContentHeading>
          <PageContent>
            Search engine optimization (SEO) is the process of optimizing the
            website to rank higher in search engine results pages (SERPs). By
            improving your website's visibility in search results, you can
            attract more organic traffic to your site and generate more leads.
          </PageContent>
          <PageContent>
            To optimize your website for SEO, we focus on several different
            factors, such as keyword research, on-page optimization, and link
            building. By identifying the keywords that your target audience is
            searching for, and incorporating those keywords into your website's
            content, we improve your chances of ranking higher in search
            results, and thus, getting more conversions (leads).
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>Generating Leads Through Google Ads</ContentHeading>
          <PageContent>
            Google Ads (formerly known as Google AdWords) is a powerful
            advertising platform that allows the business to reach potential
            customers through targeted ads. With Google Ads, you can create ads
            that appear at the top of search results pages when someone searches
            for a keyword that is relevant to your business.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>Creating Effective Lead Magnets</ContentHeading>
          <PageContent>
            A lead magnet is a piece of content that you offer to potential
            customers in exchange for their contact information. This could be
            anything from a free ebook or whitepaper to a discount code or free
            trial of your product or service.
          </PageContent>

          <PageContent>
            By offering a valuable lead magnet, you can attract more leads and
            build your email list. To be effective, your lead magnet needs to be
            highly relevant to your target audience and provide real value.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>
            Measuring the Success of Lead Generation Campaigns
          </ContentHeading>
          <PageContent>
            To know if your digital marketing campaigns are working,we track the
            KPIs and results. We use tools like Google Analytics to monitor your
            website's traffic and conversion rates, and tracking the performance
            of your ads through platforms like Google Ads and Facebook Ads
            Manager.
          </PageContent>

          <PageContent>
            By analyzing the data, you can identify areas where we need to make
            improvements and optimize your campaigns for better results.
          </PageContent>
        </ContentContainer>

        <ContentContainer>
          <ContentHeading>My Final Word</ContentHeading>
          <PageContent>
            By leveraging the power of digital marketing, you can maximize your
            online reach and attract more potential customers to your business.
          </PageContent>
          <PageContent>
            Ready to take your digital marketing to the next level? Contact us
            today to learn how we can help you maximize your online reach and
            generate more leads for your business.
          </PageContent>
        </ContentContainer>
        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default LeadsComponent;
