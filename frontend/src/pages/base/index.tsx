import AuthPage from "./Auth";
import HomePage from "./Home";

function RootLayout() {
  const user = false;
  return <main className="h-screen">{user ? <HomePage /> : <AuthPage />}</main>;
}

export default RootLayout;
