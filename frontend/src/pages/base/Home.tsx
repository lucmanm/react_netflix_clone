import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

function HomePage() {
  const { logout } = useAuthStore();
  return (
    <main className="h-screen bg-slate-100">
      home Screen
      <Button onClick={logout}>Logout</Button>
    </main>
  );
}

export default HomePage;
