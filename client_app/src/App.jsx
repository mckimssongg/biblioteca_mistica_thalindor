import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routerConfig'
import SpinnerComponent from './components/Spinner/SpinnerComponent'

function App() {
  useEffect(() => {
    import('./App.css');
    import('./views/Login/Login.css');
    import('./views/Registration/Registration.css');
  }, []);
  return (
    <BrowserRouter>
        <Suspense fallback={<SpinnerComponent/>}>
            <AppRouter/>
        </Suspense>
    </BrowserRouter>
  )
}

export default App