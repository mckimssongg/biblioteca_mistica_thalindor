import React from 'react'
import { Spinner } from 'react-bootstrap'

function SpinnerComponent() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <Spinner animation="border" role="status" />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default SpinnerComponent
