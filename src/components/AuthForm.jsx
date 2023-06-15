import { AppInput } from "./AppInput";
import { useAuthFormContext } from "../hooks/useAuthForm";
import "./AuthForm.css";

export const AuthForm = () => {
  const {
    setIdInstance,
    idInstance,
    apiTokenInstance,
    setApiTokenInstance,
    chatId,
    setChatId,
  } = useAuthFormContext();

  const handleChangeIdInstance = ({ target }) => {
    setIdInstance(target.value);
  };
  const handleChangeApiTokenInstance = ({ target }) => {
    setApiTokenInstance(target.value);
  };
  const handleChangeChatId = ({ target }) => {
    setChatId(target.value);
  };

  return (
    <div className="auth-form">
      <label className="auth-form-label">
        Id Instance
        <AppInput value={idInstance} onChange={handleChangeIdInstance} />
      </label>

      <label className="auth-form-label">
        Api Token Instance
        <AppInput
          type="password"
          value={apiTokenInstance}
          onChange={handleChangeApiTokenInstance}
        />
      </label>

      <label className="auth-form-label">
        Chat Id
        <AppInput value={chatId} onChange={handleChangeChatId} />
      </label>
    </div>
  );
};
