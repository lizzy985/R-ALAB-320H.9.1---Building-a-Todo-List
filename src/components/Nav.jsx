import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/add'> <h2>Add ToDo</h2></Link>
        <Link to='/edit/:id'><h2>Edit ToDo</h2></Link>
    </div>
  )
}

export default Nav