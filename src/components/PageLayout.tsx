import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { useIsAuthenticated } from '@azure/msal-react'
import { SigninButton } from './SigninButton'

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */

type Props = {
  text?: string
}

export const PageLayout = ({ children }: React.PropsWithChildren<Props>) => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <span>Signed In</span> : <SigninButton />}
      </Navbar>
      <h5>
        <p>
          Welcome to the Microsoft Authentication Library For React Tutorial
        </p>
      </h5>
      <br />
      <br />
      {children}
    </>
  )
}
