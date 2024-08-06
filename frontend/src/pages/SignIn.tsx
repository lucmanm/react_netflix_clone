import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Link, redirect } from "react-router-dom";
import { Header } from "@/components/header";
import { useAuthStore } from "@/store/authStore";

const signUpSchema = z.object({
  email: z.string().min(5, "email Required"),
  password: z.string().min(5, "password Required"),
});
function SignIn() {
  const { login } = useAuthStore();

  const { register, handleSubmit } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    login(data);
  };

  return (
    <main className="font-semibol bg-hero flex h-screen items-start justify-center p-3 *:text-slate-100">
      <div className="container">
        {/* Header Navigation */}
        <Header />
        {/* login container */}
        <section className="mt-28 flex items-center justify-center">
          <div className="max-w-sm rounded-lg bg-black/80 p-5">
            <h1 className="text-center text-xl font-semibold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="Username">Username</Label>
                <Input {...register("email")} className="bg-transparent" type="text" placeholder="Username" />
              </div>
              <div>
                <Label htmlFor="passsword">Password</Label>
                <Input {...register("password")} className="bg-transparent" type="password" placeholder="Password" />
              </div>
              <div>
                <Button type="submit" className="mt-3 w-full bg-red-600">
                  Login
                </Button>
              </div>
              <div className="space-x-3 p-4 text-center text-sm">
                <span>Don't have an Account?</span>
                <Link to="/sign-up" className="text-red-600">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
