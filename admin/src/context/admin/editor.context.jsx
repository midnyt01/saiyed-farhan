import { createContext, useState } from "react";

export const EditorContext = createContext({
  blogTitle: null,
  setBlogTitle: () => {},
  blogContent: null,
  setBlogContent: () => {},
  caseStudyContent: null,
  setCaseStudyContent: () => {},
  caseStudyTitle: null,
  setCaseStudyTitle: () => {},
  blogImageUrl: null,
  setBlogImageUrl: () => {},
  selectedBlogFile: null,
  setSelectedBlogFile: () => {},
  selectedCaseStudyFile: null,
  setSelectedCaseStudyFile: () => {},
  caseStudyImageUrl: null,
  setCaseStudyImageUrl: () => {},
  blogCategories: null,
  setBlogCategories: () => {},
  caseStudyCategories: null,    
  setCaseStudyCategories: () => {},
  blogMetaTitle: null,
  setBlogMetaTitle: () => {},
  blogMetaDescription: null,
  setBlogMetaDescription: () => {},
  caseStudyMetaTitle: null,
  setCaseStudyMetaTitle: () => {},
  caseStudyMetaDescription: null,
  setCaseStudyMetaDescription: () => {},
});

export const EditorPorvider = ({ children }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [selectedBlogFile, setSelectedBlogFile] = useState(null);
  const [blogImageUrl, setBlogImageUrl] = useState(null);
  const [blogCategories, setBlogCategories] = useState([]);
  const [blogMetaTitle, setBlogMetaTitle] = useState("");
  const [blogMetaDescription, setBlogMetaDescription] = useState("");

  const [caseStudyTitle, setCaseStudyTitle] = useState("");
  const [caseStudyContent, setCaseStudyContent] = useState("");
  const [selectedCaseStudyFile, setSelectedCaseStudyFile] = useState(null);
  const [caseStudyImageUrl, setCaseStudyImageUrl] = useState(null);
  const [caseStudyCategories, setCaseStudyCategories] = useState([]);
  const [caseStudyMetaTitle, setCaseStudyMetaTitle] = useState("");
  const [caseStudyMetaDescription, setCaseStudyMetaDescription] = useState("");


  const value = {
    blogTitle,
    setBlogTitle,
    blogContent,
    setBlogContent,
    caseStudyTitle,
    setCaseStudyTitle,
    caseStudyContent,
    setCaseStudyContent,
    blogImageUrl,
    setBlogImageUrl,
    selectedBlogFile,
    setSelectedBlogFile,
    selectedCaseStudyFile,
    setSelectedCaseStudyFile,
    caseStudyImageUrl,
    setCaseStudyImageUrl,
    blogCategories,    
    setBlogCategories,
    caseStudyCategories,    
    setCaseStudyCategories,
    blogMetaTitle,
    setBlogMetaTitle,
    blogMetaDescription,
    setBlogMetaDescription,
    caseStudyMetaTitle,
    setCaseStudyMetaTitle,
    caseStudyMetaDescription,
    setCaseStudyMetaDescription,

  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};
