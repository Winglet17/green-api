import { forwardRef } from "react";

import "./AppInput.css";

export const AppInput = forwardRef(function AppInput(props, ref) {
  return <input className="app-input" type="text" {...props} ref={ref} />;
});
