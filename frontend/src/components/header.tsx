import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="container flex justify-between items-center  ">
      <Link to="/">
        <img src="../../../public/default/netflix-logo.png" alt="Netflix Logo" className="h-16 " />
      </Link>
      <Button onClick={() => navigate("/sign-in")} className="bg-red-600">
        Sign In
      </Button>
    </header>
  );
};
