/* eslint-disable no-undef */
const { cipher } = require("../handleCipher/cipher");

describe("Generate different messages", () => {
  it("Should generate the same result as the control message with the control offset", () => {
    const message = "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.".split("");
    const controlMessage = "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.";
    const messageCiphered = [];

    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 7));
      return messageCiphered;
    });

    const resultMessage = messageCiphered.join("");

    expect(resultMessage).toBe(controlMessage);
  });


  it("Should generate different results with different messages", () => {
    const firstMessage = "This is a simple test, to check if the API returns different results with different messages".split("");
    const secondMessage = "The brown fox jumped over the innocent farmer and destroy his farm, what an evil fox!".split("");
    const firstMessageCiphered = [];
    const secondMessageCiphered = [];

    firstMessage.map((_letter, i) => {
      firstMessageCiphered.push(cipher(firstMessage[i], 10));
      return firstMessageCiphered;
    });
    secondMessage.map((_letter, i) => {
      firstMessageCiphered.push(cipher(secondMessage[i], 10));
      return secondMessageCiphered;
    });

    const resultFirstMessage = firstMessageCiphered.join("");
    const resultSecondMessage = secondMessageCiphered.join("");


    expect(resultFirstMessage).not.toBe(resultSecondMessage);
  });


  it("The same message should generate different results with different offsets", () => {
    const message = "This is a simple test, to check if the API returns different messages with different offsets".split("");
    let messageCiphered = [];

    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 1));
      return messageCiphered;
    });

    const resultOffsetOne = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 2));
      return messageCiphered;
    });

    const resultOffsetTwo = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 3));
      return messageCiphered;
    });

    const resultOffsetThree = messageCiphered.join("");

    expect(resultOffsetOne).not.toBe(resultOffsetTwo);
    expect(resultOffsetOne).not.toBe(resultOffsetThree);
    expect(resultOffsetTwo).not.toBe(resultOffsetThree);
  });


  it("The same offset in module and the same message passed should generate the same result", () => {
    const message = "This is a simple test, to check if the API returns the same message with the same offsets in module".split("");
    let messageCiphered = [];

    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 0));
      return messageCiphered;
    });

    const resultOffsetZero = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 26));
      return messageCiphered;
    });

    const resultOffsetTwentySix = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 260));
      return messageCiphered;
    });

    const resultOffsetTwoHundredAndSixty = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 1));
      return messageCiphered;
    });

    const resultOffsetOne = messageCiphered.join("");

    messageCiphered = [];
    message.map((_letter, i) => {
      messageCiphered.push(cipher(message[i], 27));
      return messageCiphered;
    });

    const resultOffsetTwentySeven = messageCiphered.join("");

    expect(resultOffsetZero).toBe(resultOffsetTwentySix);
    expect(resultOffsetZero).toBe(resultOffsetTwoHundredAndSixty);
    expect(resultOffsetTwentySix).toBe(resultOffsetTwoHundredAndSixty);
    expect(resultOffsetTwentySeven).toBe(resultOffsetOne);
  });
});
