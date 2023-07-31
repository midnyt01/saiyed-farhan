import React, { useContext } from 'react'
import styled from 'styled-components'
import Topbar from '../../component/admin-panel-components/admin-topbar/topbar.component';
import BlogCard from '../../component/admin-panel-components/blog-card';
import { BlogsContext } from '../../context/admin/blogs.context';

const Container = styled.div``;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 85px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 0px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 25px;
  @media (min-width: 800px) {
    font-size: 34px;
  }
`;

const BlogsContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;
`;


const AllBlogs = () => {

    const {allBlogs} = useContext(BlogsContext)

  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Header>
          <PageTitle>All Blogs</PageTitle>
        </Header>
        <BlogsContainer>
            {allBlogs && allBlogs.map((blog) => {
            return (
              <BlogCard key={blog.BlogId} blog={blog} />
            );
          })}
        </BlogsContainer>
      </Wrapper>
    </Container>
  )
}

export default AllBlogs