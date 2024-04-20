import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navar from './Navar/Navar'

function MainLayout() {
  return (
    <Fragment>
        <Navar />
        <Outlet /> 
    </Fragment> 
  )
}

export default MainLayout