import cipher from './cipher';

const messageReceiver = (message) => {
  const newMessage = cipher(message);

  return newMessage;
};

export default messageReceiver();
