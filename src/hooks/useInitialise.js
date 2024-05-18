import { useState } from "react";
import {  POST } from "../apis/apiInterceptor";
import { INITIALISE_GAME } from "../apis/APIURIs";
import { pendingState, resetStatesToDefaultValue, setResultStates } from "../utils";

const useInitialise = () => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [response, setResponse] = useState("");

  const initiliaseGame = async () => {
    resetStatesToDefaultValue(setIsPending, setIsError, setIsComplete);
    setResponse("");
    pendingState(setMessage, "Getting random word...", setIsPending);
    const result = await POST(INITIALISE_GAME);
    setResultStates(setIsPending, result, setResponse, setMessage, setIsError, setIsComplete);
  };

  return {
    state: {
      isPending,
      isError,
      message,
      isComplete,
      response
    },
    initiliaseGame
  }
}

export default useInitialise;