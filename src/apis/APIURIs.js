const baseURL = 'http://localhost:5000'

// Initiliase the game
export const INITIALISE_GAME = `${baseURL}/start`;

// Check for previos game
export const CHECK_PREVIOUS_GAME = `${baseURL}/check`

// Guess the word
export const GUESS_WORD = `${baseURL}/validate`;