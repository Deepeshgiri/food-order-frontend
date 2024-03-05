import { useAuth0 } from '@auth0/auth0-react'

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute =()=> {
//it is used to protect route or route controller
    const {isAuthenticated, isLoading}= useAuth0()
    if(isLoading){
      return null
    }

    if(isAuthenticated){
      return <Outlet/>
    }
  return   <Navigate to='/' replace />
  
    
  
}

export default ProtectedRoute