import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UserNameMenu from './UserNameMenu'

function MainNav() {
  const {loginWithRedirect,isAuthenticated} = useAuth0()
  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ?(<UserNameMenu/>):(
         <Button variant='outline'
         className='font-bold hover:text-black-500 bg-orange-500 hover:bg-white '
         onClick={async()=> await loginWithRedirect()}>
          Log In
          </Button>
      )}

    </span>
   
  )
}

export default MainNav