import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';

//  DOM elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

//  Game constants
const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

const gameOver = (pacman, grid) => {

}

const checkCollision = (pacman, ghosts) => {

}

const gameLoop = (pacman, ghosts) => {

}

const startGame = () => {

}