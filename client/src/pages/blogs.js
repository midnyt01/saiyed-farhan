import AllBlogs from "@/components/all-blogs/all-blogs";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
import { GlobalContext } from "@/context/global.context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <AllBlogs />
      <BlogSideContainer />
    </Container>
    </>
  )
}

export default Blogs