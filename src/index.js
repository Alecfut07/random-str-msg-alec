const messages = [
  "This is where it all begins...",
  "Commit comitted",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "This commit is a lie",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit messaeg you are looking for",
  "Batman! (this commit has no parents)",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

moudule.exports = {
  funnyCommit,
};
