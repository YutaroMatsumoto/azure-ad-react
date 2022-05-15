import { useState } from 'react'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from 'src/libs/authConfig'
import Button from 'react-bootstrap/Button'
import { ProfileData } from 'src/components/ProfileData'
import { callMsGraph } from 'src/libs/graph'

export function ProfileContent() {
  const { instance, accounts, inProgress } = useMsal()
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [graphData, setGraphData] = useState<any>(null)

  const name = accounts[0] && accounts[0].name

  // function RequestAccessToken() {
  //   const request = {
  //     ...loginRequest,
  //     account: accounts[0],
  //   }

  //   // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  //   instance
  //     .acquireTokenSilent(request)
  //     .then((response) => {
  //       setAccessToken(response.accessToken)
  //     })
  //     .catch((e) => {
  //       instance.acquireTokenPopup(request).then((response) => {
  //         setAccessToken(response.accessToken)
  //       })
  //     })
  // }

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          console.log('response：', response)
          setGraphData(response)
        })
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          )
        })
      })
  }

  return (
    <>
      <h5 className="w-80 leading-10 text-center border-2 border-orange-400 rounded-lg bg-orange-400 text-white">
        Welcome： {name}
      </h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
          graphAPIを実行
        </Button>
      )}
    </>
  )
}
