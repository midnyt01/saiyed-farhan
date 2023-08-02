const API = 'https://api.saiyedfarhan.com/admin';
// const API = 'http://localhost:8000/admin';


async function httpCreateAdmin (adminCred) {
    const response = await fetch(`${API}/createadmin`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(adminCred)
    })
    const admin = await response.json()
    return admin
}

async function httpLoginAdmin (adminCred) {
    const response = await fetch(`${API}/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(adminCred)
    })
    const admin = await response.json()
    return admin
}


async function httpPostBlog (blogDetails) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/blogs`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(blogDetails)
    })
    const data = await response.json()
    return data
}

async function httpGetBlogById (blogId) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/blogs/${blogId}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          }
    })
    const data = await response.json()
    return data
}

async function httpGetAllBlogs () {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/blogs`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          }
    })
    const data = await response.json()
    return data
}

async function httpUpdateBlog (blogId, blogDetails) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/blogs/${blogId}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(blogDetails)
    })
    const data = await response.json()
    return data
}

async function httpDeleteBlog (blogId) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/delete-blog/${blogId}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          }
    })
    const data = await response.json()
    return data
}

//case study
async function httpPostCaseStudy (caseStudyDetails) {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/casestudies`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "auth-token": `${adminToken}`
          },
        body: JSON.stringify(caseStudyDetails)
    })
    const data = await response.json()
    return data
}

//get all customers

async function httpGetAllCustomersDetails() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/customers`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

async function httpGetAllLeadsInfo() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/leads`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

async function httpGetAllCustomersInfo() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/customers`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

export {
    httpCreateAdmin,
    httpLoginAdmin,
    httpPostBlog,
    httpGetBlogById,
    httpGetAllBlogs,
    httpUpdateBlog,
    httpDeleteBlog,
    httpPostCaseStudy,
    httpGetAllCustomersDetails,
    httpGetAllLeadsInfo,
    httpGetAllCustomersInfo,
}