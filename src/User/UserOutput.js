import React from 'react';

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p><b>The username is:</b> {props.name}</p>
      <p><b>The quote is:</b> That's what she said</p>
    </div>
  )
}

export default userOutput;