const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//create admin account

const { db } = require("../services/mysql");

const JWT_TOKEN = "breakthematrix";

async function createAdminAccount(adminDetails, callback) {
  //encrypt password
  const { Email, Password } = adminDetails;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(Password, salt);
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`
  db.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      if (result.length > 0) {
        callback("admin with this email already exixts", null)
      } else {
        let sql = "INSERT INTO admins SET ?";
        db.query(
          sql,
          { ...adminDetails, Password: hashPass },
          async (err, result) => {
            if (err) {
              callback(err);
            } else {
              console.log(result)
              let data = {
                admin: {
                  AdminId: result.insertId,
                  PhoneNumber: adminDetails.PhoneNumber,
                  isAdmin: true,
                },
              };
              const authToken = jwt.sign(data, JWT_TOKEN);
              let success = true;
              callback(null, { authToken, success });
            }
          }
        );
      }
    }
  })
}

async function loginInAdmin(adminCreds, callback) {
  const { Email, Password } = adminCreds;
  let sql = `SELECT * FROM admins WHERE Email = '${Email}'`;
  db.query(sql, async (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      if (result.length < 1) {
        callback("admin not found", null);
      } else {
        let AdminId = result[0].AdminId;
        let comparePassword = await bcrypt.compare(
          Password,
          result[0].Password
        );
        if (!comparePassword) {
          callback("password does not match", null);
        } else {
          let data = {
            admin: {
              AdminId,
              Email,
              isAdmin: true,
            },
          };
          console.log(data)
          const authToken = jwt.sign(data, JWT_TOKEN);
          let success = true;
          callback(null, { authToken, success });
        }
      }
    }
  });
}

//blogs

async function postBlog(blogDetails, callback) {
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

// async function getAllBlogs(callback) {
//   let sql = `SELECT * FROM blogs`
//   db.query(sql, function(err, result) {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, result)
//     }
//   })
// }

//case studies
async function postCaseStudy(caseStudyDetails, callback) {
  const {Categories} = caseStudyDetails;
  let CategoriesStringfy = JSON.stringify(Categories);
  let sql = 'INSERT INTO case_studies SET ?';
  db.query(sql, {...caseStudyDetails, Categories: CategoriesStringfy}, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, {
        success: true,
      })
    }
  })
}

// async function getAllCaseStudies(callback) {
//   let sql = `SELECT * FROM case_studies`
//   db.query(sql, function(err, result) {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, result)
//     }
//   })
// }


//leads and customers

//FirstName, CustomerId, PhoneNumber, AltNumber, Country, State, City, Pincode, Landmark, BuildingName, AddressType
async function getAllCustomers(callback) {
  let sql = `SELECT UserId, FirstName, LastName, Email FROM users`;
  db.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}


async function getAllLeadsInfo (callback) {
  let sql = 'SELECT * FROM leads';
  db.query(sql, function(err, result) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = {
  createAdminAccount,
  loginInAdmin,
  postBlog,
  // getAllBlogs,
  postCaseStudy,
  // getAllCaseStudies,
  getAllCustomers,
  getAllLeadsInfo,
};
