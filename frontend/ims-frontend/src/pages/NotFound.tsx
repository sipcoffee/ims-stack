import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h3>404 Not found</h3>
        <Link to='/'>back to homepage</Link>
    </div>
  )
}
