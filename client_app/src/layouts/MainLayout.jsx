import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <Fragment>
        <div>MainLayout</div>
        <Outlet />
    </Fragment>
  )
}

export default MainLayout