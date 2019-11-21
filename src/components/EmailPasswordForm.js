import React from 'react'

function EmailPasswordForm() {
  return (
    <form>
      <h1>Signup</h1>

      <div class="form-field">
        <label for="email">Email</label>
        <input id="email" type="text" />
      </div>

      <div class="form-field">
        <label for="password">Password</label>
        <input id="password" type="password" />
      </div>

      <button>Continue</button>
    </form>
  )
}

export default EmailPasswordForm
