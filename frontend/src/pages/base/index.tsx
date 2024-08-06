import { useAuthStore } from "@/store/authStore";
import AuthPage from "./Auth";
import HomePage from "./Home";
import { useEffect } from "react";

function RootLayout() {
  const { user, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);


  // const users = false;
  return <>{user ? <HomePage /> : <AuthPage />}</>;
}

export default RootLayout;
