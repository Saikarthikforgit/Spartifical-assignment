/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import {useState} from 'react'

const CreateUser = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!username || !name || !email) {
      setError('All fields are required')
      return
    }
    const newUser = {username, name, email}
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []
    existingUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(existingUsers))
    setUsername('')
    setName('')
    setEmail('')
    setError('')
    alert('User created successfully')
  }

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default CreateUser
