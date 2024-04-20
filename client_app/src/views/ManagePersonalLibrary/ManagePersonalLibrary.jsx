import React from 'react'

import '../ManagePersonalLibrary/style.css'
import Navar from '../../components/UI/Navar/Navar'
import Grid from '../../components/UI/Grid/Grid'

export default function ManagePersonalLibrary() {
  return (
    <>
        <Navar />

        <div className='grid-container'>
          <h1 className='title'>
            <strong>Tu lista</strong>
          </h1>
          
          <div >
            <Grid/>
          </div>

        </div>
    </>
  )
}
