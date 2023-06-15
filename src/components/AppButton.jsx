import "./AppButton.css";

export const AppButton = ({ children, ...props }) => (
  <button className="app-button" {...props}>
    {children}
  </button>
);
