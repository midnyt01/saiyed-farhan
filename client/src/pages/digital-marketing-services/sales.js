import BrandingComponent from "@/components/services-component/branding-component";
import SalesComponent from "@/components/services-component/sales-component";
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

const SalesPage = () => {

  return (
    <>
    <Head>
      <title>Online Sales -  Data-Oriented Digital Marketing Service</title>
      <meta name="description" content=" Increase your sales and revenue by availing the best and data-oriented  digital marketing services. Stand out from the competition and attract your target audience. Contact me today!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
    </Head>
      <Container>
      <SalesComponent />
      <ServicesSideContainer activeService={"sales"} />
    </Container>
    </>
  );
};


export default SalesPage;
