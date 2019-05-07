import React from 'react'
import Rows from './Rows'
import './Table.css'

function Table() {
  return (
    <table>
        <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>

        </thead>
        <tbody>
            <Rows />
        </tbody>
</table>
  )
}

export default Table
