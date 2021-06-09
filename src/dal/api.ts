import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tager.dev.ozitag.com',
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('user')}`
    }

})

//api
export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<AuthMeResponseType>('/api/auth/user', data)

    },
    // logout() {
    //     return instance.post<OtherResponseType>('/api/tager/user/profile/logout', {})
    // },
    fetch() {
        return instance.get<FetchProfileType>('/api/tager/user/profile')
    }
}
// Types authAPI
/** Request Types */
export type LoginParamsType = {
    clientId: number
    email: string
    password: string
}

/** Response Types */
export type AuthMeResponseType = {
    data: {
        tokenType: null,
        expiresAt: number,
        accessToken: string,
        refreshToken: string
    }
}

type OtherResponseType = {
    success: boolean
}

export interface FetchProfileType {
   data:{
       name: string
       email: string
   }
}