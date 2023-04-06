import BlogPost from "@/components/blog-post/blog-post";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
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

const BlogPage = (props) => {


  return (
    <Container>
      <BlogPost blog={props} />
      <BlogSideContainer />
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  let response = await fetch(`http://localhost:8000/customer/blogs/${slug}`);
  let blogData = await response.json();
  return { props: blogData };
}

export default BlogPage;
