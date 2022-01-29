import localWords from "./top15kPopularWords.json";

export const getRandomWords = async (): Promise<string[]> => {
  const response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
  return response.json();
};

export const getRandomWordsFromLocal = (count: number = 10): string[] => {
  const uniqueIndexes = new Set();
  while (uniqueIndexes.size !== count) {
    uniqueIndexes.add(Math.floor(Math.random() * 100) + 1);
  }
  return Array.from(uniqueIndexes).map((item) => localWords[item as number]);
};
