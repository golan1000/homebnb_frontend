import Axios from 'axios'

//connect to the mongoDB
//work with session
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3000/api/'

var axios = Axios.create({ withCredentials: true })

export const httpService = {
  get(path, data) {
    return workAxios(path, 'GET', data)
  },
  post(path, data) {
    return workAxios(path, 'POST', data)
  },
  put(path, data) {
    return workAxios(path, 'PUT', data)
  },
  delete(path, data) {
    return workAxios(path, 'DELETE', data)
  },
}

async function workAxios(path, type, data) {
  try {
    const res = await axios({
      url: BASE_URL + path,
      method: type,
      data,
      params: type === 'GET' ? data : null,
    })
    return res.data
  } catch (err) {
    console.log('error in axios=', err)
    throw err
  }
}
