import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { getUserData } from '../../api'
console.log(getUserData)

function Login() {
  const navigate = useNavigate()
  const [selectedUser, setSelectedUser] = useState(null)
  const handleSelection = (event) => {
    const userId = parseInt(event.target.value, 10)
    const user = getUserData.find((user) => user.id === userId)
    setSelectedUser(user)
  }

  const handleLogin = () => {
    if (selectedUser) {
      navigate('/Dashboard', { state: { user: selectedUser } })
    } else {
      console.log('la')
    }
  }
  return (
    <div>
      <h1>Connexion</h1>
      <select onChange={handleSelection} defaultValue="">
        <option value="" disabled>
          Sélectionnez un utilisateur
        </option>
        {getUserData.map((user) => (
          <option key={user.id} value={user.id}>
            {user.userInfos.firstName} {user.userInfos.lastName}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  )
}

export default Login
