export const pendingState = (setMessage, message, setIsPending) => {
    setMessage(message);
    setIsPending(true);
  }
  
  export const resetStatesToDefaultValue = (setIsPending, setIsError, setIsComplete) => {
    setIsPending(false);
    setIsError(false);
    setIsComplete(false);
  }
  
  export const setResultStates = (setIsPending, result = {status: "", message: ""}, setDataState, setMessage, setIsError, setIsComplete, successMessage) => {
    if(result.status === 200 || result.status === 202 || result.message === "OK"){
      setDataState && setDataState(result.data);
      successMessage && setMessage(successMessage);
      setIsComplete && setIsComplete(true);
    } else {
      setMessage(result.message ? ( `${result.status} : ${result.message}`) : (`${result.status} Failed to perform the operation`));
      setIsError(true);
    }
    setIsPending(false);
  }