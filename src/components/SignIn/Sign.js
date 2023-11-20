import React from 'react'

function Sign() {
  return (
    <div className="container">
      <h2>Sign In</h2>
        <form>
            <label for="username">Email or Username:</label>
            <input type="text" id="username" name="username" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default Sign