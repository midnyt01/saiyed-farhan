
import styled from "styled-components";
import Topbar from "../../../component/admin-panel-components/admin-topbar/topbar.component";
import "react-quill/dist/quill.snow.css";

import "./blog-editor.styles.css";
import BlogEditorBody from "../../../component/admin-panel-components/blog-editor-body/blog-editor-body.component";


const Container = styled.div`
  width: 100%;
`;

const BlogEditor = () => {

  return (
    <Container>
      <Topbar />
      <BlogEditorBody />
    </Container>
  );
};

export default BlogEditor;
