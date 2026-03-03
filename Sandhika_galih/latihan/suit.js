var ask = true;
while (ask) {
  let userChoice = prompt("Pilih : Gunting, Batu, Kertas");
  let botChoice = "";
  let result = "";
  let random = Math.random();

  if (userChoice) {
    userChoice =
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }

  if (random < 0.33) {
    botChoice = "Gunting";
  } else if (random < 0.67) {
    botChoice = "Batu";
  } else {
    botChoice = "Kertas";
  }

  if (!["Gunting", "Batu", "Kertas"].includes(userChoice)) {
    result = "Input tidak valid!";
  } else if (userChoice === botChoice) {
    result = "Draw!";
  } else {
    switch (userChoice) {
      case "Gunting":
        result = botChoice === "Kertas" ? "You win!" : "You lose!";
        break;
      case "Batu":
        result = botChoice === "Gunting" ? "You win!" : "You lose!";
        break;
      case "Kertas":
        result = botChoice === "Batu" ? "You win!" : "You lose!";
        break;
    }
  }

  alert(
    "You choose " + userChoice + " dan bot choose " + botChoice + "\n" + result,
  );
  ask = confirm("Play again?");
}
alert("Thanks for playing!");
