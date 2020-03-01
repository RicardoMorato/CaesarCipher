import cipher from "./cipher";

const messageHandler = (message, offset) => {
  const messageArray = Array.from(message);
  const cipheredMessage = [];

  for (let i = 0; i < messageArray.length; i += 1) {
    cipheredMessage[i].push(cipher(messageArray[i], offset));
  }

  return cipheredMessage.join("");
};

export default messageHandler();
