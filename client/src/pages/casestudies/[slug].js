import CaseStudySideContainer from "@/components/case-study-side-container/case-study-side-container";
import CaseStudy from "@/components/case-study/case-study";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const CaseStudyPage = (props) => {


  return (
    <Container>
      <CaseStudy study={props} />
      <CaseStudySideContainer />
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  let response = await fetch(`http://localhost:8000/customer/casestudies/${slug}`);
  let caseStudyData = await response.json();
  return { props: caseStudyData };
}

export default CaseStudyPage;
