import BlogPost from "@/components/blog-post/blog-post";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const findBlogIdByUrl = (blogUrl, blogsArray) => {
  const foundBlog = blogsArray.find(blog => blog.Url === blogUrl);

  // Return the blogId if found, or handle the case when not found (e.g., return null or -1)
  return foundBlog ? foundBlog.BlogId : null;
};

const BlogPage = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <BlogPost blog={props} />
        <BlogSideContainer />
      </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch all blogs directly from the API
    const response = await fetch("https://api.saiyedfarhan.com/customer/blogs");
    const allBlogs = await response.json();
    // console.log('blogs are ', allBlogs)

    // Find the blogId based on the slug
    const blogId = findBlogIdByUrl(slug, allBlogs);
    console.log('blog id is ', blogId, ' and blog url is ', slug)

    // Fetch the specific blog data based on the blogId
    const blogResponse = await fetch(`https://api.saiyedfarhan.com/customer/blogs/${blogId}`);
    const blogData = await blogResponse.json();

    return { props: blogData };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
}

export default BlogPage;
