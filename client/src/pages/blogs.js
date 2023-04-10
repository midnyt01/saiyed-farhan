import AllBlogs from "@/components/all-blogs/all-blogs";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
import Head from "next/head";
import styled from "styled-components"

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;


const Blogs = () => {
  return (
    <>
    <Head>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <Container>
      <AllBlogs />
      <BlogSideContainer />
    </Container>
    </>
  )
}

export default Blogs