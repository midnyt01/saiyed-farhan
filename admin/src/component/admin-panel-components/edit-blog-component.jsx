import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { httpUpdateBlog } from "../../utils/nodejs/admin";
import { BlogsContext } from "../../context/admin/blogs.context";
import MetaContainers from "./meta-containers/meta-containers.component";
import CategoriesOptions from "./categories/categories.component";
import Topbar from "./admin-topbar/topbar.component";
import EditMetaContainers from "./meta-containers/edit-meta-containers.component";
import EditCategoriesOptions from "./categories/edit-categories.component";


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

const Action = styled.div`
  box-sizing: border-box;
  padding: 7px 20px;
  background: #4ec000;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
`;

const TitleInput = styled.input`
  font-size: 35px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const BlogContainer = styled.div``;

const BlogTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
`;

const RemoveButton = styled.div`
  scale: 0;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.32);
  box-sizing: border-box;
  padding: 1px 7px;
  top: 8px;
  z-index: 20;
  right: 12px;
  cursor: pointer;
  transition: all 0.2s ease 1s;
`;

const CoverImageContainer = styled.div`
  max-width: 200px;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  &:hover ${RemoveButton} {
    scale: 1;
    transition-delay: 0s;
  }
`;
const CoverImage = styled.img`
  width: 100%;
`;

const EditorBodyContainer = styled.div`
  height: 450px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    height: 700px;
  }
`;

const BlogBody = styled(ReactQuill)`
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;

  div {
    border-radius: 10px;
  }
  .ql-container.ql-snow {
    height: 73%;
    @media (min-width: 800px) {
      height: 90%;
    }
  }
`;
var toolbarOptions = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ header: 1 }, { header: 2 }, { header: 3}, {header: 4}, {header: 5}, {header: 6}],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ align: [] }],
  [{ direction: "rtl" }],
  ["link", "video"],

  ["clean"],
];

const modules = {
  toolbar: toolbarOptions,
  clipboard: {
    matchVisual: false,
  },
};



const EditBlogComponent = () => {

  // document.addEventListener("DOMContentLoaded", function() {
  //   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   svg.setAttribute("width", "16");
  //   svg.setAttribute("height", "16");
  //   svg.setAttribute("fill", "currentColor");
  //   svg.setAttribute("class", "bi bi-type-h3");
  //   svg.setAttribute("viewBox", "0 0 16 16");
  
  //   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //   path.setAttribute("d", "... SVG path data ...");
  //   svg.appendChild(path);
  
  //   const spanElement = document.querySelector(".ql-formats");
  //   const thirdButton = spanElement.querySelector('button.ql-header[value="3"]');
  
  //   spanElement.insertBefore(svg, thirdButton.nextSibling);
  // });
  
    const navigate = useNavigate();
  
    
    const { Id } = useParams();

    const {
        currentBlog,
        setCurrentBlog,
      blogTitle,
      setBlogTitle,
      blogMetaTitle,
      blogMetaDescription,
      blogContent,
      setBlogContent,
      blogCategories,
    } = useContext(BlogsContext);

    useEffect(() => {
        setCurrentBlog(Id);
    }, [Id])
  
    const handleBlogContentChange = (content, delta, source, editor) => {
      setBlogContent(editor.getHTML());
    };
  
    const handleOnTitleChange = (e) => {
      setBlogTitle(e.target.value);
    };
  
    const handlePublish = async () => {
      
        let date = new Date();
        let CreatedAt = date.getTime();
        let blogDetails = {
            MetaTitle : blogMetaTitle,
            MetaDescription: blogMetaDescription,
            Title: blogTitle,
            Content: blogContent,
            Categories: blogCategories,
            Author: 'Saiyed Farhan',
            CreatedAt,
        }
        let response = await httpUpdateBlog(currentBlog,blogDetails)
        if (response.success) {
            alert('blog post successfully')
        } else {
            console.log(response)
            alert('error in posting blog', response)
        }
    };
  
  return (
    <>
    <Topbar />
    <Wrapper>
        <Header>
          <PageTitle>Edit Blog</PageTitle>
          <Action onClick={handlePublish}>Update</Action>
        </Header>
        <BodyContainer>
          {/* {!selectedBlogFile && <CoverImageForm type={"blog"} />}
          {selectedBlogFile && (
            <CoverImageContainer>
              <CoverImage src={URL.createObjectURL(selectedBlogFile)} />
              <RemoveButton onClick={handleRemoveCoverImage} ><FontAwesomeIcon icon="fa-solid fa-xmark" /></RemoveButton>
            </CoverImageContainer>
          )} */}
          <TitleContainer>
            <Title>Title</Title>
            <TitleInput
              value={blogTitle}
              type="text"
              onChange={handleOnTitleChange}
            />
          </TitleContainer>
          {/* type blog for blog and case for case study */}
          <EditCategoriesOptions type="blog" />
          <EditMetaContainers type="blog" />
          <BlogContainer>
            <BlogTitle>Content</BlogTitle>
            <EditorBodyContainer>
              <BlogBody
                theme="snow"
                value={blogContent}
                onChange={handleBlogContentChange}
                modules={modules}
              />
            </EditorBodyContainer>
          </BlogContainer>
          {/* <ReactQuill readOnly theme="bubble" value={blogContent} /> */}
        </BodyContainer>
      </Wrapper>
      </>
  )
}

export default EditBlogComponent