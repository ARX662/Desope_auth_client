

import useFetch from "./useFetch";
import { useCallback } from 'react'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'


const Login = () => {
  useFetch(
    "http://localhost:9000/login"
  );

  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return <>
    {!isAuthenticated &&
      (
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log('Could not log in!')}
        />
      )
    }

    {
      (isSessionLoading || isUserLoading) && <p>Loading...</p>
    }

    {!isUserLoading && isAuthenticated &&
      (
        <>
          <p>Hello {user.name}</p>
          <div style={{ textAlign: "center", margin: "3rem" }}>Welcome to the landing page</div>
          <button  onClick={handleLogout}>Logout</button>
        </>
      )
    }
  </>;
}

export default Login;
