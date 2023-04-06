import { httpGetAllBlogs, httpGetAllCaseStudies } from "@/utils/api";
import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext({
  allBlogs: [],
  allCaseStudies: [],
  recentBlogs: [],
  setRecentBlogs: () => {},
  recentCaseStudies: [],
  setRecentCaseStudies: () => {},
});

export const ContentProvider = ({ children }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogComments, setBlogComments] = useState([]);

  const [allCaseStudies, setAllCaseStudies] = useState([]);
  const [recentCaseStudies, setRecentCaseStudies] = useState([]);
  const [caseStudyComments, setCaseStudyComments] = useState([]);

  useEffect(() => {
    async function getAllBlogs() {
      try {
        const blogsArray = await httpGetAllBlogs();
        setAllBlogs(blogsArray);
      } catch (error) {
        console.log("error in getting all blogs", error);
      }
    }
    getAllBlogs();
  }, []);

  useEffect(() => {
    const blogsArray = [];
    for (let i = 0; i < Math.min(allBlogs.length, 6); i++) {
      blogsArray.push(allBlogs[i]);
    }
    setRecentBlogs(blogsArray);
  }, [allBlogs]);

  useEffect(() => {
    async function getAllCaseStudies() {
      try {
        const caseStudyArray = await httpGetAllCaseStudies();
        setAllCaseStudies(caseStudyArray);
      } catch (error) {
        console.log("error in getting all case studies", error);
      }
    }
    getAllCaseStudies();
  }, []);

  useEffect(() => {
    const caseStudyArray = [];
    for (let i = 0; i < Math.min(allCaseStudies.length, 6); i++) {
      caseStudyArray.push(allCaseStudies[i]);
    }
    setRecentCaseStudies(caseStudyArray);
  }, [allCaseStudies]);


  const value = {
    allBlogs,
    allCaseStudies,
    recentBlogs,
    setRecentBlogs,
    recentCaseStudies,
    setRecentCaseStudies,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
