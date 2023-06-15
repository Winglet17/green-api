import { useRef, useEffect } from "react";
import { AppInput } from "./AppInput";
import { AppButton } from "./AppButton";
import { useAuthFormContext } from "../hooks/useAuthForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

import "./ChatInputText.css";

export const ChatInputText = () => {
  const { idInstance, apiTokenInstance, chatId } = useAuthFormContext();
  const [text, setText] = useLocalStorage("");
  const inputRef = useRef();

  const handleChange = ({ target }) => setText(target.value);

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") sendMessage();
  };

  const clearInputText = () => setText("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendMessage = () => {
    fetch(
      `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({
          chatId,
          message: text,
        }),
      }
    );

    clearInputText();
  };

  const onClick = () => sendMessage();

  return (
    <div className="input-container">
      <AppInput
        ref={inputRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <AppButton onClick={onClick}>Отправить</AppButton>
    </div>
  );
};
