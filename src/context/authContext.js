import {createContext} from 'react'

export const AuthContext = createContext({
    loading: false,
    setLoading: () =>{},
    loginUser:() => {},
    registerUser:() => {},
    logoutUser:() => {},
})