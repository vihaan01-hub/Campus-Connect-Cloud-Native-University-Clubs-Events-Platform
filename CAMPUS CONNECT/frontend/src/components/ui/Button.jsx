export const Button = ({ children, onClick, type = "button" }) => {
  // TODO: Add style variants (primary, secondary)
  return <button type={type} onClick={onClick}>{children}</button>;
};

