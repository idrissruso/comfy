import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const activeUserToken = localStorage.getItem('accessToken')

const initialState = {
  user: activeUserToken ? jwtDecode(activeUserToken).userName : null,
  accessToken: activeUserToken ? activeUserToken : null,
  refreshToken: activeUserToken ? localStorage.getItem('refresh') : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
    },
  },
})

export const { login, logout } = authSlice.actions
export function selectUser(state) {
  return state.auth.user
}
export default authSlice.reducer
