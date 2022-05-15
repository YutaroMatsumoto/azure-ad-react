import React from 'react'

type Props = {
  graphData: any
}

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = ({ graphData }: Props) => {
  return (
    <div id="profile-div">
      <p>
        <strong>First Name: </strong> {graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {graphData.surname}
      </p>
      <p>{/* <strong>Email: </strong> {graphData.userPrincipalName} */}</p>
      <p>
        <strong>Id: </strong> {graphData.id}
      </p>
    </div>
  )
}
