export const Input = ({ type = "text", placeholder, value, onChange }) => {
  // TODO: Add validation and error display
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

