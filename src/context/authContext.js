import {createContext} from 'react'

export const AuthContext = createContext({
    loading: true,
    setLoading: () =>{},
    loginUser:() => {},
    registerUser:() => {},
    logoutUser:() => {},
    verificationCode:() => {},
})