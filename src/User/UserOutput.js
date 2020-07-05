import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p><b>The username is:</b> {props.name}</p>
      <p><b>The quote is:</b> boom! roasted!</p>
    </div>
  )
}

export default userOutput;