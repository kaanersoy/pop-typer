export const getRandomWords = async (): Promise<string[]> => {
  const response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
  return response.json();
};
