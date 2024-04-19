import React from 'react'

import '../ManagePersonalLibrary/style.css'
import Navar from '../../components/UI/Navar/Navar'
import Grid from '../../components/UI/Grid/Grid'

export default function ManagePersonalLibrary() {
  return (
    <>
        <Navar />
        <div className='content-container'>
            <h1>
                <strong>Tu lista</strong>
            </h1>
            <Grid/>

        </div>
      
    </>
  )
}
