import * as React from "react";
import OtpTypeInput from "./common/OtpTypeInput";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Textarea } from "@mui/joy";
import { replaceChars } from "../utils";
import { useEffect } from "react";
import useGuess from "../hooks/useGuess";

function PlayArena({ initialResponse, gameId, wordLength }) {
  const [revealedWord, setRevealedWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [inputLetter, setInputLetter] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // Custom hook
  const {
    state: {
      isPending = false,
      message = "",
      isComplete = false,
      isError = false,
      response = {},
    },
    validateCharacter,
  } = useGuess();

  useEffect(() => {
    if (response) {
      setRevealedWord(response.revealedWord);
      setWrongGuesses(response.wrongGuesses);
      setIsGameOver(response.isGameOver);
      setIsWin(response.isWin);
      setInputLetter("");
    }
  }, [isComplete]);

  const handleCharInput = async (e) => {
    validateCharacter(gameId, e.target.value);
  };

  return (
    <>
      <Typography level="h1">Guess the word</Typography>
      {gameId && (
        <OtpTypeInput
          value={revealedWord ? revealedWord : "_".repeat(wordLength)}
          length={wordLength}
        />
      )}
      <Typography level="h1">You have {wrongGuesses} strikes</Typography>
      <Typography level="h1">Enter the letter</Typography>
      <Textarea
        name="Solid"
        placeholder="Enter the letter…"
        variant="solid"
        value={inputLetter}
        onChange={handleCharInput}
      />
      {isGameOver && (
        <Typography level="h1">
          {isWin ? "Congratulations, you won!" : "Game over, you lost!"}
        </Typography>
      )}
    </>
  );
}

export default PlayArena;
