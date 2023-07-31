import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditBlogComponent from '../../component/admin-panel-components/edit-blog-component'
import Topbar from '../../component/admin-panel-components/admin-topbar/topbar.component'

const EditBlog = () => {
  return (
    <Routes>
      <Route index element={<Topbar />} />
      <Route path="/:Id" element={<EditBlogComponent />} />
    </Routes>
  )
}

export default EditBlog