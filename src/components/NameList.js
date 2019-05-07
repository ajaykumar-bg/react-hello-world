import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {id: 1, name: 'Ajay', age: 28, skill: 'Angular'},
        {id: 2, name: 'Sankar', age: 28, skill: 'React'},
        {id: 3, name: 'Vue', age: 28, skill: 'Vue'}
    ];
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
  return (
    <ul>{personList}</ul>
  )
}

export default NameList
