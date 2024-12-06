import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { userId } = useParams()

  const users = {
    1: 'Alice',
    2: 'Bob',
    3: 'Charlie',
  }

  const userName = users[userId] || 'User not found'

  return (
    <div>
      <h1>Details of {userName}</h1>
    </div>
  )
}

export default UserDetails
