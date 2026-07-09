import { Mail, Lock } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";

function LoginForm() {
  return (
    <Card>
      <h2 className="text-3xl font-bold text-white">
        Welcome Back
      </h2>

      <p className="mt-2 text-zinc-400">
        Sign in to continue your job search.
      </p>

      <div className="mt-8 space-y-5">

        <Input
          label="Email"
          placeholder="Enter your email"
          leftIcon={<Mail size={18} />}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          leftIcon={<Lock size={18} />}
          required
        />

        <div className="flex justify-end">

          <button className="text-sm text-orange-500 hover:text-orange-400">
            Forgot Password?
          </button>

        </div>

        <Button fullWidth>
          Continue
        </Button>

      </div>

      <p className="mt-8 text-center text-zinc-400">

        Don't have an account?

        <button className="ml-2 font-semibold text-orange-500 hover:text-orange-400">
          Register
        </button>

      </p>
    </Card>
  );
}

export default LoginForm;