import { OBJECT_TYPE, LEVEL } from "./setup";
import GameBoard from "./GameBoard";

// DOM Elelments
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

// Game Constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkPosition(pacman, ghosts) {}

function gameloop(pacman, ghosts) {}

function startGame() {}
