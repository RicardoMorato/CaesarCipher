const { cipher } = require("./cipher");

module.exports = {
  messageReceiver(req, res) {
    const { message, offset } = req.body;
    const cipheredMessage = [];
    const letter = message.split("");

    if (!/^-?\d+$/.test(offset)) return res.status(400).json({ error: "The offset must be an integer." });
    if (offset < 0 || offset >= 26) return res.status(400).json({ error: "The offset must be betwen 0 and 25." });

    letter.map((_letter, i) => {
      cipheredMessage.push(cipher(message[i], offset));
      return cipheredMessage;
    });

    const result = cipheredMessage.join("");
    return res.status(200).json(result);
  },
};
