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
  const [gameId, setGameId] = useState(localStorage.getItem("gameId") || null);
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
  } = useInitialise();

  useEffect(() => {
    if (response) {
      // localStorage.setItem("gameId", response.gameId); // set the game id
      setGameId(response.gameId);
      setWordLength(response.wordLength);
    }
  }, [isComplete]);

  const handleInitialiseGame = async () => {
    if (!gameId) {
      initiliaseGame();
    }
  };

  return (
    <>
      <Appbar />
      {!isComplete && !isPending && (
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
        />
      )}
    </>
  );
}

export default Home;
