/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
// src/components/PostsListing.js
import {useState, useEffect} from 'react'

const PostsListing = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = () => {
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
      setPosts(storedPosts)
    }

    fetchPosts()
  }, [])

  const handleDelete = index => {
    const updatedPosts = posts.filter((_, i) => i !== index)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    setPosts(updatedPosts)
  }

  const handleHide = index => {
    const updatedPosts = [...posts]
    updatedPosts[index].hidden = true
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    setPosts(updatedPosts)
  }

  return (
    <div>
      <div className="kpi-box">Total Posts: {posts.length}</div>
      <div className="kpi-box">
        Posts Published in Last 24h: {/* fetch and show recent posts count */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Post Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(
            (post, index) =>
              !post.hidden && (
                <tr key={index}>
                  <td>{post.caption}</td>
                  <td>
                    <a
                      href={post.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Media
                    </a>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleHide(index)}>Hide</button>
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PostsListing
