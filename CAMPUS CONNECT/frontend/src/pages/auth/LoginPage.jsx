import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Call useAuth hook
  };

  return <LoginForm onSubmit={handleLogin} />;
};
