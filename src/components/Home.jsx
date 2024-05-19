import React from "react";
import Appbar from "./Appbar";
import { Button } from "@mui/material";
import useInitialise from "../hooks/useInitialise";
import Spinner from "./common/Spinner";
import PlayArena from "./PlayArena";
import Banner from "./common/Banner";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  // States
  const [gameId, setGameId] = useState(
    sessionStorage.getItem("gameId") || null
  );
  const [wordLength, setWordLength] = useState(0);

  // Custom hook
  const {
    state: {
      isPending = false,
      message = "",
      isComplete = false,
      isError = false,
      response = {},
    },
    initiliaseGame,
    previousGameState,
  } = useInitialise();

  useEffect(() => {
    if (gameId && gameId !== "undefined") {
      previousGameState(gameId);
    }
  }, []);

  useEffect(() => {
    if (response) {
      const { gameId, wordLength } = response;
      if (gameId) {
        sessionStorage.setItem("gameId", response.gameId); // set the game id
        setGameId(response.gameId);
      }
      setWordLength(wordLength);
    }
  }, [isComplete]);

  const handleInitialiseGame = async () => {
    sessionStorage.removeItem("gameId"); // clear game id after the game
    initiliaseGame();
  };

  return (
    <>
      <Appbar />
      {!gameId && (
        <Button variant="outlined" onClick={handleInitialiseGame}>
          Start
        </Button>
      )}
      {isPending && <Spinner />}
      {isError && <Banner severity={"error"} message={message} />}
      {isComplete && (
        <PlayArena
          initialResponse={response}
          gameId={gameId}
          wordLength={wordLength}
          restart={handleInitialiseGame}
        />
      )}
    </>
  );
}

export default Home;
