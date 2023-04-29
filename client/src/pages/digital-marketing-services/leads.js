import BrandingComponent from "@/components/services-component/branding-component";
import LeadsComponent from "@/components/services-component/leads-component";
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

const LeadsPage = () => {
  const router = useRouter();

  const { isLogin } = useContext(GlobalContext);

  if (!isLogin) {
    useEffect(() => {
      if (!isLogin) {
        router.push("/login");
      }
    }, [isLogin, router]);
    return null;
  }

  return (
    <>
      <Head>
        <title> Increase Online Leads via Digital Marketing Service</title>
        <meta
          name="description"
          content="Generate more leads by availing the best and proven digital marketing strategies. Stand out from the competition and attract your target audience. Contact us today!"
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <Container>
        <LeadsComponent />
        <ServicesSideContainer activeService={"leads"} />
      </Container>
    </>
  );
};

export default LeadsPage;
