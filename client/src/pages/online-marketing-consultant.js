import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import mainImage from "../assets/saiyed-farhan.jpg"

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
`;

const Heading  = styled.h1`
    font-size: 22pxpx;
`

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 50px;
    @media (min-width: 800px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    flex: 1;
    @media (min-width: 800px) {
        width: 90%;
    }

    img {
        width: 80%;
        height: 100%;
        @media (max-width: 800px) {
        width: 100%;
    }
    }
`;

const AboutContainer = styled.div`
    flex: 3.5;
    margin-top: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5;
    @media (min-width: 800px) {
        margin-top: 20px;
    }

    p {
        margin-bottom: 25px;
    }
`;

const SaiyedFarhan = () => {
  return (
    <>
    <Head>
        <title>
        Who Is Saiyed Farhan? 
        </title>
        <meta
          name="description"
          content="Know about Saiyed Farhan - Digital Marketing Consultant from India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container>
        <Heading>Saiyed Farhan</Heading>
      <Wrapper>
        <ImageContainer>
          <Image src={mainImage} alt="saiyed farhan" width={100} height={100} unoptimized />
        </ImageContainer>
        <AboutContainer>
          <p>I’m Saiyed Farhan. I am an Online Marketing Consultant. And, I work in/with FuduGo Solutions - Web and App Development & Digital Marketing company based in Nagpur (India) and serving client all over the globe.</p> 
          <p>With a passion for digital marketing and a deep understanding of the ever-evolving online landscape, I help businesses grow their online presence, increase brand visibility, and achieve their marketing goals.
          </p>
            <p>Having worked in the field of online marketing for several years, I have developed a strong expertise in various aspects of digital marketing, including Search Engine Optimization (SEO), Social Media Marketing, Content Marketing, Google Ads (PPC), and Market Place ads. I stay up-to-date with the latest industry trends and best practices, ensuring that my clients receive cutting-edge strategies and solutions tailored to their specific needs.
          </p>
          <p>At Fudugo, a leading digital marketing agency in Nagpur, I collaborate with a team of talented professionals to deliver exceptional results for our clients. We believe in a data-driven approach, combining creativity with analytics to develop effective marketing strategies that yield measurable results. Whether you're a startup looking to establish your online presence or an established business seeking to enhance your digital marketing efforts, I am here to provide the guidance and expertise you need to succeed.
          </p>
          <p>I take pride in building strong relationships with my clients, understanding their unique goals and challenges, and devising customized strategies to address them. By conducting in-depth research, analyzing market trends, and utilizing the latest tools and techniques, I am able to create comprehensive marketing plans that drive traffic, engage audiences, and convert leads into loyal customers.
          </p>
          <p>Throughout my career, I have had the opportunity to work with a diverse range of clients across various industries, including e-commerce, hospitality, healthcare, and more. This experience has given me valuable insights into different market dynamics, consumer behavior, and effective marketing approaches for different target audiences.
          </p>
          <p>Here, you will find valuable resources, informative articles, and case studies that showcase my expertise and provide actionable insights to help you navigate the ever-changing digital landscape.
          </p>
        </AboutContainer>
      </Wrapper>
    </Container>
    </>
  );
};

export default SaiyedFarhan;
