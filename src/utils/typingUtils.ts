export const validateOnTyping = (
  writedWord: string,
  target: string,
  onSuccess: () => void,
  onFailure: () => void,
) => {
  const isValidationOk = target.includes(writedWord);
  const isPopSucces = target === writedWord;
  if (isPopSucces && isValidationOk) {
    onSuccess();
    return;
  }
  if (!isValidationOk) {
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
