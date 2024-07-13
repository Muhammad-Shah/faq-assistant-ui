import { createChatBotMessage } from "react-chatbot-kit";
const botName = "We are here to help 💁‍♂️";
export const config = {
  initialMessages: [createChatBotMessage(`🙋‍♂️Hi three ${botName}`)],
  botName: botName,
};
