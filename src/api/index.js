export const API_URL = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin'

export const request = async (method, body, token = '') => {
  try {
    const result = await fetch(API_URL, { 
      method,
      mode: 'cors',
      headers: new Headers({
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }), 
      body
    });
    return result
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  const data = await request('post', 'uuid=hello', 'hello')  
  if (data?.status === 201) {
    const {response} = await data.json()
    return response
  }
}

