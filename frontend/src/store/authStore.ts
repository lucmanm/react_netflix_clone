import axios from "axios"
import { create } from "zustand";
import { toast } from 'react-toastify';

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
}
// TODO Continue
export const useAuthStore = create<TUserStore>()((set) => ({
    user: null,
    isSigningUp: false,
    isAuth: true,
    signUp: async (credentials) => {
        set({ isSigningUp: true })
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials)

            console.log(response);

            // set({ user: response.data.user, isSigningUp: false })
            toast.success("Account Successfully Signed Up", {
                position: "top-center"
            })

        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios errors
                console.error("ERROR_CREDENTIALS", error);
                toast.error(error.response?.data?.message || "ERROR_SIGN_UP");
                set({ isSigningUp: false, user: null })
            } else {
                // Handle other types of errors
                console.error("UNKNOWN_ERROR", error);
                toast.error("An unexpected error occurred");
                set({ isSigningUp: false, user: null })
            }

        }
    },

    login: async () => { },
    logout: async () => { },
    authCheck: async () => {
        set({ isAuth: true })
        try {
            const response = await axios.get("/api/v1/auth/authcheck")
            console.log(response);

            set({ user: response.data.user, isAuth: false })

        } catch (error) {
            set({ isAuth: false, user: null })
            console.log("EROR_AUTHCHECK", error);
            // toast.error({ error.response.data.message })
        }
    }
}))