const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { db } = require("../services/mysql");

const JWT_TOKEN = "breakthematrix";

async function createUserAccount(userCred, callback) {
  const { FirstName, LastName, Email, Password } = userCred;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(Password, salt);
  let sql0 = `SELECT userId FROM users WHERE Email = '${Email}'`;
  db.query(sql0, function (err0, result0) {
    if (err0) {
      callback(err0, null);
    } else {
      if (result0.length > 0) {
        callback("User with this Email already exits", null);
      } else {
        let sql = "INSERT INTO users SET ?";
        db.query(
          sql,
          { ...userCred, Password: hashPass },
          async (err, result) => {
            if (err) {
              callback(err);
            } else {
              let data = {
                user: {
                  Email,
                  Id: result.insertId,
                },
              };
              const authToken = jwt.sign(data, JWT_TOKEN);
              let success = true;
              let userInfo = {
                Name: FirstName + " " + LastName,
                Email: Email
              }
              callback(null, { authToken, success, userInfo });
            }
          }
        );
      }
    }
  });
}

async function logInUser(userCred, callback) {
  const { Email, Password } = userCred;
  let sql = `SELECT * FROM users WHERE Email = '${Email}'`;
  db.query(sql, async function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      if (result.length < 1) {
        callback("User email not found", null);
      } else {
        let comparePassword = await bcrypt.compare(
          Password,
          result[0].Password
        );
        if (!comparePassword) {
          callback("Password is not correct", null);
        } else {
          let data = {
            user: {
              Email,
              Id: result[0].userId,
            },
          };
          const authToken = jwt.sign(data, JWT_TOKEN);
          let success = true;
          let userInfo = {
            Name: result[0].FirstName + " " + result[0].LastName,
            Email: result[0].Email
          }
          callback(null, { authToken, success, userInfo });
        }
      }
    }
  });
}

async function addCustomerAddress(address, CustomerId, callback) {
  let sql = "INSERT INTO customer_addresses SET ?";
  db.query(sql, { ...address, CustomerId }, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      console.log(result);
      callback(null, {
        AddressId: result.insertId,
        ok: true,
      });
    }
  });
}

async function getAllCustomerAddressesById(CustomerId, callback) {
  let sql = `SELECT * FROM customer_addresses WHERE CustomerId = ${CustomerId}`;
  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

async function deleteCustomerAddressById(AddressId, CustomerId, callback) {
  //validation (is customer deleting their own address)
  let sql0 = `SELECT CustomerId FROM customer_addresses WHERE AddressId = ${AddressId}`;
  db.query(sql0, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      if (result[0].CustomerId === CustomerId) {
        let sql = `DELETE FROM customer_addresses WHERE AddressId = ${AddressId}`;
        db.query(sql, function (err, result) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, {
              success: true,
            });
          }
        });
      } else {
        callback(`You Don't have access to delete this address`, null)
      }
    }
  });
}

//blogs and case studies 

async function CreateBlogPostByCustomer(blogDetails, callback) {
  const {Categories} = blogDetails;
  let CategoriesStringfy = JSON.stringify(Categories);
  let sql = 'INSERT INTO blogs SET ?';
  db.query(sql, {...blogDetails, Categories: CategoriesStringfy}, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true,
      })
    }
  })
}

async function getAllBlogs(callback) {
  let sql = `SELECT * FROM blogs WHERE IsDeleted = ${0} ORDER BY BlogId DESC`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  })
}

async function getBlogById(Id, callback) {
  let sql = `SELECT * FROM blogs WHERE BlogId = ${Id}`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0])
    }
  })
}

async function commentOnBlogPost(CommentDetails ,callback) {
  let sql = 'INSERT INTO blog_comments SET ?'
  db.query(sql, CommentDetails, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true,
        CommentId: result.insertId
      })
    }
  })
}

async function getAllCommentsOnBlog(BlogId, callback) {
  let sql = `SELECT * FROM blog_comments WHERE BlogId = ${BlogId} ORDER BY CommentId DESC`
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

async function getAllRepliesOnComment(CommentId, callback) {
  let sql = `SELECT * FROM blog_comment_replies WHERE CommentId = ${CommentId}`
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

async function postReplyOnBlogComment (replyDetails, callback) {
  let sql = 'INSERT INTO blog_comment_replies SET ?'
  db.query(sql, replyDetails, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true,
        ReplyId: result.insertId
      })
    }
  })
}

async function getAllCaseStudies(callback) {
  let sql = `SELECT * FROM case_studies WHERE IsDeleted = ${0} ORDER BY CaseStudyId DESC`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  })
}

async function getCaseStudyById(Id, callback) {
  let sql = `SELECT * FROM case_studies WHERE CaseStudyId = ${Id} AND IsDeleted = ${0}`;
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0])
    }
  })
}

//leads

async function postContactMe(formDetails, callback) {
  let sql = 'INSERT INTO leads SET ?'
  db.query(sql, formDetails, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        success: true
      })
    }
  })
}


module.exports = {
  createUserAccount,
  logInUser,
  addCustomerAddress,
  getAllCustomerAddressesById,
  deleteCustomerAddressById,
  CreateBlogPostByCustomer,
  getAllBlogs,
  getBlogById,
  commentOnBlogPost,
  getAllCommentsOnBlog,
  getAllRepliesOnComment,
  postReplyOnBlogComment,
  getAllCaseStudies,
  getCaseStudyById,
  postContactMe,
};



