import React from 'react'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../libs/auth/config'
import Button from 'react-bootstrap/Button'

function handleLogin(instance: any) {
  instance.loginRedirect(loginRequest).catch((e: any) => {
    console.error(e)
  })
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SigninButton = () => {
  const { instance } = useMsal()

  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogin(instance)}
    >
      Sign in using Redirect
    </Button>
  )
}
