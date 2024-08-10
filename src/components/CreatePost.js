/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import {useState} from 'react'

const CreatePost = () => {
  const [caption, setCaption] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!caption || !mediaUrl) {
      setError('Both fields are required')
      return
    }
    const newPost = {caption, mediaUrl}
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || []
    existingPosts.push(newPost)
    localStorage.setItem('posts', JSON.stringify(existingPosts))
    setCaption('')
    setMediaUrl('')
    setError('')
    alert('Post created successfully')
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Caption:</label>
          <input
            type="text"
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
        </div>
        <div>
          <label>Media URL:</label>
          <input
            type="text"
            value={mediaUrl}
            onChange={e => setMediaUrl(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
