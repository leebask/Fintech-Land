import PropTypes from 'prop-types'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

RequiredAuth.propTypes = {
  children: PropTypes.element,
}

export default function RequiredAuth({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  let location = useLocation()

  
  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} />
  }
  return children
}
