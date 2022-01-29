export const validateOnTyping = (
  writedWord: string,
  target: string,
  onSuccess: () => void,
  onFailure: () => void,
) => {
  const splittedWritedWord = writedWord.split("");
  const hasFailure = splittedWritedWord.some((key, index) => key !== target[index]);

  const isPopSucces = target === writedWord;
  if (isPopSucces && !hasFailure) {
    onSuccess();
    return;
  }
  if (hasFailure) {
    onFailure();
  }
};

export const validateGameEnding = (
  poppedWordsCount: number,
  targetCount: number,
  callback: () => void,
): void => {
  if (poppedWordsCount === targetCount) {
    callback();
  }
};
