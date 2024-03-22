"use strict";
// user choice
const getUserChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const userChoice = prompt("Choose (rock/paper/scissors) :").toLowerCase();

  if (!choices.includes(userChoice)) {
    return "Invalid! please choose between (rock/paper/scissors)!";
  }

  return userChoice;
};
