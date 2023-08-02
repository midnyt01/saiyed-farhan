const express = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const fetchAdmin = require("../../middleware/fetchadmin");

const {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpGetAllCustomers,
  httpUploadBlogCoverImage,
  httpPostBlog,
  httpGetAllBlogs,
  httpPostCaseStudy,
  httpGetAllCaseStudies,
  httpGetAllLeads,
  httpUpdateBlog,
  httpDeleteBlog,
  httpGetBlogById,
  httpGetCaseStudyById,
  httpUpdateCaseStudy,
  httpDeleteCaseStudy,
} = require("./admin.controller");

const adminRouter = express.Router();


cloudinary.config({
  cloud_name: "dwl9menj8",
  api_key: "135468123577919",
  api_secret: "owPFWlgRspVZtT2umMHMkaIehCw"
});

// Configure the multer middleware with the Cloudinary storage engine
  const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'gif']
  }
});
const upload = multer({ storage: storage });

adminRouter.post("/createadmin", httpCreateAdminAccount);
adminRouter.post("/login", httpLoginAdmin);

//blog post

adminRouter.post("/blogcoverimage", upload.single('file'), httpUploadBlogCoverImage);
adminRouter.post("/blogs", fetchAdmin, httpPostBlog);
adminRouter.get("/blogs", fetchAdmin, httpGetAllBlogs);
adminRouter.get("/blogs/:id", fetchAdmin, httpGetBlogById);
adminRouter.put("/blogs/:id", fetchAdmin, httpUpdateBlog);
adminRouter.put("/delete-blog/:id", fetchAdmin, httpDeleteBlog);

//case study
adminRouter.post("/casecoverimage", upload.single('file'), httpUploadBlogCoverImage);
adminRouter.post("/casestudies", fetchAdmin, httpPostCaseStudy);
adminRouter.get("/casestudies", fetchAdmin, httpGetAllCaseStudies);
adminRouter.get("/casestudies/:id", fetchAdmin, httpGetCaseStudyById);
adminRouter.put("/casestudies/:id", fetchAdmin, httpUpdateCaseStudy);
adminRouter.put("/delete-casestudy/:id", fetchAdmin, httpDeleteCaseStudy);


//customers 

adminRouter.get("/customers", fetchAdmin, httpGetAllCustomers)
adminRouter.get("/leads", fetchAdmin, httpGetAllLeads)

module.exports = adminRouter;
