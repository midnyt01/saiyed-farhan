import AllBlogs from "@/components/all-blogs/all-blogs";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
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
    <Container>
      <AllBlogs />
      <BlogSideContainer />
    </Container>
  )
}

export default Blogs