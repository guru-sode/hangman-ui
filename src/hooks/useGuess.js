import { useState } from "react";
import { POST } from "../apis/apiInterceptor";
import { GUESS_WORD } from "../apis/APIURIs";
import { pendingState, resetStatesToDefaultValue, setResultStates } from "../utils";

const useGuess = () => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [response, setResponse] = useState("");

  const validateCharacter = async (gameId, inputLetter) => {
    resetStatesToDefaultValue(setIsPending, setIsError, setIsComplete);
    setResponse("");
    pendingState(setMessage, "Validating the character...", setIsPending);
    const result = await POST(GUESS_WORD, {gameId, letter: inputLetter});
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
    validateCharacter
  }
}

export default useGuess;