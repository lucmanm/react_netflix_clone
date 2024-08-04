import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/header";

const signUpSchema = z.object({
  email: z.string().min(5, "email Required"),
  username: z.string().min(5, "username Required"),
  passsword: z.string().min(5, "password Required"),
});
function SignUp() {
  const { register, handleSubmit } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      passsword: "",
      username: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
  };

  return (
    <main className="flex items-start p-3 justify-center  font-semibol h-screen bg-hero *:text-slate-100">
      <div className="container">
        {/* Header Navigation */}
        <Header />
        {/* login container */}
        <section className="flex items-center justify-center mt-28">
          <div className="bg-black/80 rounded-lg max-w-sm p-5">
            <h1 className="text-xl font-semibold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="Username">Email</Label>
                <Input
                  {...register("email")}
                  className="bg-transparent"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  {...register("username")}
                  className="bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <Label htmlFor="passsword">Password</Label>
                <Input
                  {...register("passsword")}
                  className="bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <Button type="submit" className="bg-red-600 w-full mt-3">
                  Rigister
                </Button>
              </div>
              <div className="text-center text-sm p-4 space-x-3">
                <span>Don't have an Account?</span>
                <Link to="/sign-in" className="text-red-600">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignUp;
