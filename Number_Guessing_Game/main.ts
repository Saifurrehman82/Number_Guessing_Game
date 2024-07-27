import inquirer from "inquirer";

type AnsType = {
  UserGuess: number;
};

(async () => {
  const systemGenNo = Math.floor(Math.random() * 10) + 1; // Ensure the number is between 1 and 10
  const answers: AnsType = await inquirer.prompt([
    {
      type: "number",
      name: "UserGuess",
      message: "Write Your Guess:"
    }
    ]);

  const { UserGuess } = answers;

  if (UserGuess === systemGenNo) {
    console.log(UserGuess, "UserGuess", systemGenNo, "sys");
    console.log("Yes!!! Your Answer is correct \n You Win");
  } else {
    console.log("Please Try Again Better Luck Next Time");
  }
})();
