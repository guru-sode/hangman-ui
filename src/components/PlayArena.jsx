import * as React from "react";
import OtpTypeInput from "./common/OtpTypeInput";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Textarea } from "@mui/joy";
import { useEffect } from "react";
import useGuess from "../hooks/useGuess";
import Banner from "./common/Banner";
import Spinner from "./common/Spinner";

function PlayArena({
  initialResponse = {},
  gameId = null,
  wordLength = 0,
  restart = () => {},
}) {
  const [revealedWord, setRevealedWord] = useState(
    initialResponse.revealedWord ? initialResponse.revealedWord : ""
  );
  const [wrongGuesses, setWrongGuesses] = useState(
    initialResponse.wrongGuesses ? initialResponse.wrongGuesses : 0
  );
  const [inputLetter, setInputLetter] = useState("");
  const [isGameOver, setIsGameOver] = useState(
    initialResponse.isGameOver ? initialResponse.isGameOver : false
  );
  const [isWin, setIsWin] = useState(
    initialResponse.isWin ? initialResponse.isWin : false
  );

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
      const { revealedWord, wrongGuesses, isGameOver, isWin } = response;
      setRevealedWord(revealedWord);
      setWrongGuesses(wrongGuesses);
      setIsGameOver(isGameOver);
      setIsWin(isWin);
      setInputLetter("");
    }
  }, [isComplete]);

  const handleCharInput = async (e) => {
    validateCharacter(gameId, e.target.value);
  };

  const handleRestart = () => {
    restart(true);
  };

  return (
    <>
      {isError && <Banner severity={"error"} message={message} />}
      {isPending && <Spinner />}
      <Typography level="h1">Guess the word</Typography>
      {gameId && (
        <OtpTypeInput
          value={revealedWord ? revealedWord : "_".repeat(wordLength)}
          length={revealedWord ? revealedWord.length : wordLength}
        />
      )}
      <Typography level="h1">You have {10 - wrongGuesses} strikes</Typography>
      <Typography level="h1">Enter the letter</Typography>
      <Textarea
        name="Solid"
        placeholder="Enter the letter…"
        variant="solid"
        value={inputLetter}
        onChange={handleCharInput}
      />
      {isGameOver &&
        (isWin ? (
          <Banner
            severity={"error"}
            message={"You have guessed the word, congrats"}
          />
        ) : (
          <Banner severity={"error"} message={"Oops, Game over! try again"} />
        ))}
      <Button
        variant="outlined"
        onClick={handleRestart}
        style={{ marginTop: "12px" }}
      >
        Restart
      </Button>
    </>
  );
}

export default PlayArena;
