import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
function MainLayout() {
  return (
    <Fragment>
        <Header />
        <Outlet /> {/* hijos de MainLayout */}
    </Fragment> 
  )
}

export default MainLayout