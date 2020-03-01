import messageHandler from "./messageHandler";

const messageReceiver = (message, offset) => {
  const newMessage = messageHandler(message, offset);

  return newMessage;
};

export default messageReceiver();
