import axios from "axios"
import { create } from "zustand";
import { toast } from 'react-toastify';
import { Redirect } from "react-router-dom";

type TUser = {
    email: string;
    username: string;
    password: string;
}

type TUserStore = {
    user: null,
    signUp: (credentials: TUser) => void
    login: () => void
    logout: () => void
    authCheck: () => void
    isSigningUp: boolean
    isAuth: boolean
    isLoggedOut: boolean
}

export const useAuthStore = create<TUserStore>()((set) => ({
    user: null,
    isSigningUp: false,
    isAuth: true,
    isLoggedOut: false,
    signUp: async (credentials) => {
        set({ isSigningUp: true })
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials)

            // TODO works fine even if after sign is state is not set
            set({ user: response.data.user, isSigningUp: false })
            toast.success("Account Successfully Signed Up", {
                position: "top-center"
            })

        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios errors
                console.log("ERROR_CREDENTIALS", error);
                toast.error(error.response?.data?.message || "ERROR_SIGN_UP");
                set({ isSigningUp: false, user: null })
            } else {
                // Handle other types of errors
                console.log("ERROR_STATE_", error);
                toast.error("An unexpected error occurred");
                set({ isSigningUp: false, user: null })
            }

        }
    },

    login: async () => { },

    logout: async () => {
        try {
            set({ isLoggedOut: true })
            await axios.post("/api/v1/auth/logout")
            set({ user: null, isLoggedOut: false })
            toast.success("Successfully Logged Out")
        } catch (error) {
            set({ isLoggedOut: false })
            console.log("ERROR_LOGOUT", error);
            toast.error("ERROR_LOGOUT")
            // toast.error(error.response.data.)
        }
    },

    authCheck: async () => {
        set({ isAuth: true })
        try {
            const response = await axios.get("/api/v1/auth/authcheck")
            console.log("AUTH_CHECK", response);
            set({ user: response.data.user, isAuth: false })

        } catch (error) {
            set({ isAuth: false, user: null })
            console.log("EROR_AUTHCHECK", error);
            // toast.error({ error.response.data.message })
        }
    }
}))