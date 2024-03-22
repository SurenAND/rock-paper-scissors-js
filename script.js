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

// bot choice
const makeBotChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
};
