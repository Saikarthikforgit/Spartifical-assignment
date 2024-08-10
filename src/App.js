// src/App.js
// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom'
import Home from './components/Home'
import UsersListing from './components/UsersListing'
import PostsListing from './components/PostsListing'
import CreateUser from './components/CreateUser'
import CreatePost from './components/CreatePost'
import './App.css'

const NavLink = ({to, children}) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

const App = () => (
  <Router>
    <div className="layout">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/create-user">Create User</NavLink>
          <NavLink to="/create-post">Create Post</NavLink>
        </ul>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersListing />} />
          <Route path="/posts" element={<PostsListing />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  </Router>
)

export default App
