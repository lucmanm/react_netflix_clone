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
}
// TODO Continue
export const useAuthStore = create<TUserStore>()((set) => ({
    user: null,
    isSigningUp: false,
    signUp: async (credentials) => {
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials)

            // console.log(response);

            set({ user: response.data.user, isSigningUp: false })
            toast.success("Account Successfully Signed Up",{
                position: "top-center"
            })

        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios errors
                console.error("ERROR_CREDENTIALS", error);
                toast.error(error.response?.data?.message || "ERROR_SIGN_UP");
            } else {
                // Handle other types of errors
                console.error("UNKNOWN_ERROR", error);
                toast.error("An unexpected error occurred");
            }

        }
    },
    login: async () => { },
    logout: async () => { },
    authCheck: async () => { }
}))