import { createContext, useEffect, useState } from "react";
import { httpGetAllBlogs, httpGetBlogById } from "../../utils/nodejs/admin";

export const BlogsContext = createContext({
    allBlogs: [],
    setAllBlogs: () => {},
    currentBlog: null,
    setCurrentBlog: () => {},
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

export const BlogsPorvider = ({ children }) => {

    const [allBlogs, setAllBlogs] = useState([]);

    const [currentBlog, setCurrentBlog] = useState(null);

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

    useEffect(() => {
        const getallBlogs = async () => {
            let blogArray = await httpGetAllBlogs();
            console.log({blogArray})
            setAllBlogs(blogArray);
        }
        getallBlogs();
    }, [])


    useEffect(() => {
      const getBlogInfo = async () => {
        if (currentBlog !== null) {
          let response = await httpGetBlogById(currentBlog);
          const {BlogId, MetaTitle, MetaDescription, Title, Content, Categories} = response[0];
          setBlogTitle(Title);
          setBlogMetaTitle(MetaTitle);
          setBlogMetaDescription(MetaDescription);
          setBlogContent(Content);
          setBlogCategories(JSON.parse(Categories));
        }
      }
      getBlogInfo();
    }, [currentBlog])


  const value = {
    allBlogs,
    setAllBlogs,
    currentBlog,
    setCurrentBlog,
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
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
};
