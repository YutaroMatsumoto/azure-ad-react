import React from 'react'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { PageLayout } from './components/PageLayout'

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <p>ログインしています！</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>ログインしてください！</UnauthenticatedTemplate>
    </PageLayout>
  )
}

export default App
