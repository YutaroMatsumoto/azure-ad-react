import React from 'react'
import { useMsal } from '@azure/msal-react'
import Button from 'react-bootstrap/Button'

function handleLogout(instance: any) {
  instance.logoutRedirect().catch((e: any) => {
    console.error(e)
  })
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignoutButton = () => {
  const { instance } = useMsal()

  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogout(instance)}
    >
      ログアウト
    </Button>
  )
}
