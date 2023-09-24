
import { getSessionToken } from '@descope/react-sdk';

// Pass URL
const useFetch = async () => {
  const sessionToken = getSessionToken();

  fetch('your_application_server_url', {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + sessionToken,
    }
  })
}
export default useFetch;