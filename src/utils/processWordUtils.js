export const replaceChars = (character, randomWord, processedWord) => {
    let processedWordArray = processedWord.split("");
    let randomWordArray = randomWord.split("");
    for(let i=0; i<randomWordArray.length; i++) {
        if(randomWordArray[i] === character) {
            processedWordArray[i] = character;
        } else {
            processedWordArray[i] = "";
        }
    }
    return processedWordArray.join("");
}