import React from 'react'

function HigherOrder(LowerOrder) {
  return (props) => {
    return <LowerOrder {...props} />
  }
}

export default HigherOrder