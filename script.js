"use strict";

// variables
let userScore = 0;
let botScore = 0;
let gameResult;
let userChoice;
let botChoice;

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

// check the result
const checkResult = (userChoice, botChoice) => {
  if (userChoice === botChoice) {
    userScore += 0;
    botScore += 0;
    gameResult = "Draw!";
  }

  if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    userScore += 1;
    botScore += 0;
    gameResult = "Winner of this round is You!";
  } else if (
    (botChoice === "rock" && userChoice === "scissors") ||
    (botChoice === "paper" && userChoice === "rock") ||
    (botChoice === "scissors" && userChoice === "paper")
  ) {
    userScore += 0;
    botScore += 1;
    gameResult = "Winner of this round is Bot!";
  }
  return userScore, botScore, gameResult;
};
