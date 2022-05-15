import React from 'react'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { PageLayout } from 'src/components/PageLayout'
import { ProfileContent } from 'src/components/ProfileContent'
import { ProfileData } from 'src/components/ProfileData'

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <p>ログインしています！</p>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>ログインしてください！</UnauthenticatedTemplate>
    </PageLayout>
  )
}

export default App
