import React from 'react'

function Person({person}) {
  return (
    <li>I am {person.name}, {person.age} years old & I know {person.skill}</li>
  )
}

export default Person
