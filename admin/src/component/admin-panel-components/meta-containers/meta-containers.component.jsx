import React, { useContext } from "react";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 95%;
  margin-bottom: 20px;
  font-size: 17px;
  margin-top: 8px;
`;

const MetaContainers = ({ type }) => {
  const {
    blogMetaTitle,
    setBlogMetaTitle,
    blogMetaDescription,
    setBlogMetaDescription,
    caseStudyMetaTitle,
    setCaseStudyMetaTitle,
    caseStudyMetaDescription,
    setCaseStudyMetaDescription,
  } = useContext(EditorContext);

  const handleMetaTitleChange = (event) => {
    if (type === "blog") {
      setBlogMetaTitle(event.target.value);
    } else if (type === "case") {
      setCaseStudyMetaTitle(event.target.value);
    }
  };

  const handleMetaDescriptionChange = (event) => {
    if (type === "blog") {
      setBlogMetaDescription(event.target.value);
    } else if (type === "case") {
      setCaseStudyMetaDescription(event.target.value);
    }
  };
  

  return (
    <div>
    <Label htmlFor="metaTitle">Meta Title</Label>
    <Input
      type="text"
      id="metaTitle"
      placeholder="Enter meta Title"
      value={type === "blog" ? blogMetaTitle : caseStudyMetaTitle}
      onChange={handleMetaTitleChange}
    />
    <Label htmlFor="metaDescription">Meta Description</Label>
    <Input
      type="text"
      id="metaDescription"
      placeholder="Enter meta description"
      value={type === "blog" ? blogMetaDescription : caseStudyMetaDescription}
      onChange={handleMetaDescriptionChange}
    />
  </div>
  )
};

export default MetaContainers;
