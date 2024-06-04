console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("readable", () => {
  const chk = process.stdin.read();
  if (chk !== null) {
    process.stdout.write(`Your name is: ${chk}`);
  }
});

process.stdin.on("end", () => {
  console.log("This important software is now closing");
});
