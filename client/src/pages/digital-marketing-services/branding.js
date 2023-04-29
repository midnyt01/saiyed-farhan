import BrandingComponent from "@/components/services-component/branding-component";
import ServicesSideContainer from "@/components/services-side-container/services-side-container";
import { GlobalContext } from "@/context/global.context";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const BrandingPage = () => {

  const router = useRouter();

  const {isLogin} = useContext(GlobalContext)

  if (!isLogin) {
    useEffect(() => {
      if (!isLogin) {
        router.push('/login');
      }
    }, [isLogin, router])
    return null;
  }



  return (
    <>
    <Head>
      <title>Branding: Digital Marketing Service - 100% Proven Strategies</title>
      <meta name="description" content="Transform your business into Brand with my branding service. Stand out from the competition and attract your target audience. Contact us today!" />
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
    <Container>
      <BrandingComponent />
      <ServicesSideContainer activeService={"branding"} />
    </Container>
    </>
  );
};


export default BrandingPage;
