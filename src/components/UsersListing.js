/* eslint-disable react/no-array-index-key */
// src/components/UsersListing.js
import {useState, useEffect} from 'react'

const UsersListing = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = () => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      setUsers(storedUsers)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <div className="kpi-box">Total Users: {users.length}</div>
      <div className="kpi-box">Users Active in Last 24h: {}</div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersListing
