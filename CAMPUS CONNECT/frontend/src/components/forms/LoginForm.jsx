export const LoginForm = ({ onSubmit }) => {
  // TODO: Add controlled form inputs for email + password
  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};
