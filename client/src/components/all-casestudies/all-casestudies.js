import { ContentContext } from "@/context/content.context";
import { useContext, useState } from "react";
import styled from "styled-components";
import BlogCard from "../blog-card/blog-card";
import PopularBlogCard from "../popular-blog-card/popular-blog-card";
import CaseStudyCardTwo from "../case-stude-card-2/case-study-card-2";

const Container = styled.div`
  flex: 8;
  width: 100%;
`;

const PageHeading = styled.h1`
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const PaginationButton = styled.button`
  margin: 0 10px;
  padding: 10px 15px;
  border: none;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#aaa")};
  }
`;

const ITEMS_PER_PAGE = 6;

const AllCaseStudies = () => {
  const { allCaseStudies } = useContext(ContentContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = allCaseStudies.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCaseStudies = allCaseStudies.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <PageHeading>Case Studies</PageHeading>
      <Wrapper>
        {currentCaseStudies.map((study) => {
          return <CaseStudyCardTwo key={study.BlogId} study={study} />;
        })}
      </Wrapper>
      <PaginationWrapper>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          return (
            <PaginationButton
              key={page}
              active={isActive}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PaginationButton>
          );
        })}
      </PaginationWrapper>
    </Container>
  );
};

export default AllCaseStudies;
