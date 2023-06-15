import { useEffect, useMemo, useState } from "react";
import "./ChatMessages.css";
import { useAuthFormContext } from "../hooks/useAuthForm";

export const ChatMessages = () => {
  const { idInstance, apiTokenInstance, chatId } = useAuthFormContext();
  const [messages, setMessages] = useState([]);

  const getMessage = async () => {
    try {
      const response = await fetch(
        // receiveNotification всегда присылает null, поэтому вывела история чата
        `https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
          method: "POST",
          body: JSON.stringify({
            chatId,
          }),
        }
      );
      if (response.status !== 200) throw new Error("Ошибка в запросе");
      const data = await response.json();

      setMessages(data);
    } catch (error) {
      setMessages([]);
    }
  };

  const reversedMessage = useMemo(() => {
    return messages.reverse();
  }, [messages]);

  useEffect(() => {
    const intervalId = setInterval(getMessage, 5000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(!!reversedMessage.length);

  if (!reversedMessage.length) {
    return <div className="messages-container">Загрузка...</div>;
  }

  return (
    <div className="messages-container">
      {reversedMessage.map((item) => (
        <div key={item.idMessage} className="messages-item">
          {item.textMessage}
        </div>
      ))}
    </div>
  );
};
