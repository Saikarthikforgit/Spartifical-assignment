/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React from 'react'

import {Link} from 'react-router-dom'

const Sidebar = () => (
  <div className="sidebar">
    <h2>Admin Dashboard</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users Listing</Link>
      </li>
      <li>
        <Link to="/posts">Posts Listing</Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
