import AuthLayout from "../../components/layout/AuthLayout";
import Card from "../../components/common/Card";

function LoginPage() {
  return (
    <AuthLayout>

      <Card>

        <h2 className="text-4xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-zinc-400">
          Sign in to continue your AI-powered job search.
        </p>

      </Card>

    </AuthLayout>
  );
}

export default LoginPage;