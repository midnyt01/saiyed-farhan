import BrandingComponent from "@/components/services-component/branding-component";
import ServicesSideContainer from "@/components/services-side-container/services-side-container";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const BrandingPage = () => {


  return (
    <Container>
      <BrandingComponent />
      <ServicesSideContainer activeService={"branding"} />
    </Container>
  );
};


export default BrandingPage;
