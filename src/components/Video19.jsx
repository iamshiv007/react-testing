// multiple element with getByRole and custom role

import React from 'react'

const Video19 = () => {
  return (
    <div>
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password" />
        <button>Click 1</button>
        <button>Click 2</button>
        <div role='divTag'>Hello this is div tag</div>
    </div>
  )
}

export default Video19