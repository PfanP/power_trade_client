import axios from 'axios'
import moment from 'moment'
import { getStore } from 'store/configureStore'
import { logoutRequest } from 'actions/auth.action'

const request = axios.create({
  baseURL: process.env.REACT_APP_PROXY + '/' + process.env.REACT_APP_API_BASE_URL,
})

export const setAuthTokenToHeader = () => {
  const store = getStore().getState()
  const { currentUser } = store.auth
  const token = currentUser && currentUser.token
  if (!token) return Promise.reject(new Error('No Token found'))
  if (moment().diff(token.expiresIn) > 0) {
    getStore().dispatch(logoutRequest())
  }
  request.defaults.headers.common[
    'Authorization'
  ] = `${token.tokenType} ${token.accessToken}`
}

export const loginAPI = (authParams) => {
  return request.request({
    method: 'post',
    url: '/auth/login',
    data: authParams,
  })
}

export const registerAPI = (registerParams) =>
  request.request({
    method: 'post',
    url: '/auth/register',
    data: registerParams,
  })

export const userListAPI = (userListParams) =>
  request.request({
    method: 'get',
    url: '/users',
    params: userListParams,
  })

export const userLoadAPI = (userID) =>
  request.request({
    method: 'get',
    url: `/users/${userID}`,
  })

export const userUpdateAPI = (userID, data) =>
  request.request({
    method: 'patch',
    url: `/users/${userID}`,
    data,
  })

export const userDeleteAPI = (userID) =>
  request.request({
    method: 'delete',
    url: `/users/${userID}`,
  })

export const userAddAPI = (userAddParams) =>
  request.request({
    method: 'post',
    url: '/users',
    data: userAddParams,
  })

export const playerListAPI = (playerListParams) =>
  request.request({
    method: 'get',
    url: '/player',
    params: playerListParams,
  })

export const playerLoadAPI = (playerID) =>
  request.request({
    method: 'get',
    url: `/player/${playerID}`,
  })

export const playerUpdateAPI = (playerID, data) =>
  request.request({
    method: 'patch',
    url: `/player/${playerID}`,
    data,
  })

export const playerAddAPI = (playerAddParams) =>
  request.request({
    method: 'post',
    url: '/player',
    data: playerAddParams,
  })

export const playerDeleteAPI = (playerID) =>
  request.request({
    method: 'delete',
    url: `/player/${playerID ? playerID : ''}`,
  })

export const recordListAPI = ({playerID, page, perPage}) =>
  request.request({
    method: 'get',
    url: `/record?${playerID ? 'player=' + playerID: ''}`,
    data: {page, perPage}
  })

export const recordDeleteAPI = (recordID) =>
  request.request({
    method: 'delete',
    url: `/record/${recordID}`,
  })

export const recordAddAPI = (recordAddParams) =>
  request.request({
    method: 'post',
    url: '/record',
    data: recordAddParams,
  })

export const getErrMessage = ({response}) => {
    const { data } = response;
  if (data.errors && data.errors.length > 0) {
      let errMessage = ''
      console.log(data.errors)
      data.errors.map(error => errMessage += error.messages.join("\n"))
      return errMessage
  } else {
    return data && data.message ? data.message : 'Unknown Error!'
  }
}

request.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    //place your reentry code
    if (request.defaults.headers.common['Authorization'])
      getStore().dispatch(logoutRequest())
  }
  throw error
})
