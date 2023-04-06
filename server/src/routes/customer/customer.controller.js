const {
  addCustomerAddress,
  getAllCustomerAddressesById,
  deleteCustomerAddressById,
  getAllBlogs,
  getBlogById,
  getAllCaseStudies,
  getCaseStudyById,
  CreateBlogPostByCustomer,
  commentOnBlogPost,
  postContactMe,
  getAllCommentsOnBlog,
  postReplyOnBlogComment,
  getAllRepliesOnComment,
  createUserAccount,
  logInUser,
} = require("../../models/customer.model");

async function httpCreateCustomerAccount(req, res) {
  await createUserAccount(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpLoginCustomer(req, res) {
  await logInUser(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpAddCustomerAddress(req, res) {
  let CustomerId = req.customer.Id;
  await addCustomerAddress(req.body, CustomerId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetAllCustomerAddressesById(req, res) {
  let CustomerId = req.customer.Id;
  await getAllCustomerAddressesById(CustomerId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpDeleteCustomerAddressById(req, res) {
  let AddressId = req.params.id;
  let CustomerId = req.customer.Id;
  await deleteCustomerAddressById(AddressId, CustomerId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

//blogs and case studies

async function httpCreateBlogPostByCustomer(req, res) {
  let blogDetails = req.body;
  await CreateBlogPostByCustomer(blogDetails, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetAllBlogs(req, res) {
  let Id = req.params.id;
  await getAllBlogs(function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetBlogById(req, res) {
  let Id = req.params.id;
  await getBlogById(Id, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpCommentOnBlogPost(req, res) {
  let CommentDetails = req.body;
  await commentOnBlogPost(CommentDetails, function(err, data) {
    if (err) {
        res.status(400).json(err)
    } else {
        res.status(200).json(data)
    }
  });
}

async function httpGetAllCommentsOnBlog(req, res) {
  let BlogId = req.params.id;
  await getAllCommentsOnBlog(BlogId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetAllRepliesOnBlogComment(req, res) {
  let CommentId = req.params.id;
  await getAllRepliesOnComment(CommentId, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpReplyOnBlogComment(req, res) {
  let replyDetails = req.body;
  await postReplyOnBlogComment(replyDetails, function(err, data) {
    if (err) {
        res.status(400).json(err)
    } else {
        res.status(200).json(data)
    }
  });
}

async function httpGetAllCaseStudies(req, res) {
  await getAllCaseStudies(function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpGetCaseStudyById(req, res) {
  let Id = req.params.id;
  await getCaseStudyById(Id, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
}

async function httpPostContactMe(req, res) {
    let formDetails = req.body;
    await postContactMe(formDetails, function(err, data) {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}

module.exports = {
  httpCreateCustomerAccount,
  httpLoginCustomer,
  httpAddCustomerAddress,
  httpGetAllCustomerAddressesById,
  httpDeleteCustomerAddressById,
  httpCreateBlogPostByCustomer,
  httpGetAllBlogs,
  httpGetBlogById,
  httpCommentOnBlogPost,
  httpGetAllCommentsOnBlog,
  httpGetAllRepliesOnBlogComment,
  httpReplyOnBlogComment,
  httpGetAllCaseStudies,
  httpGetCaseStudyById,
  httpPostContactMe,
};
