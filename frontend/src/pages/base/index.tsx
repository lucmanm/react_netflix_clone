import { useAuthStore } from "@/store/authStore";
import AuthPage from "./Auth";
import HomePage from "./Home";
import { useEffect } from "react";

function RootLayout() {
  const { user, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, []);

  // const users = false;
  return <main className="h-screen">{user ? <HomePage /> : <AuthPage />}</main>;
}

export default RootLayout;
