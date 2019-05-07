import React from 'react'

function NameList() {
    const names = ['Ajay', 'Arun', 'Sankar', 'Viswan'];
    const nameList = names.map(name => <li key={name}>{name}</li>)
  return (
    <ul>{nameList}</ul>
  )
}

export default NameList
