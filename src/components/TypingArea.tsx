import React, { ReactElement, useEffect, useState } from "react";
import { validateGameEnding, validateOnTyping } from "../utils/typingUtils";
import { getRandomWordsFromLocal } from "../utils/words";
import { isArrayFilled } from "../utils/common";
import "../style/typing-area.scss";

function TypingArea() {
  const [wordOrder, setWordOrder] = useState(0);
  const [poppedWordsCount, setPoppedWordsCount] = useState(0);
  const [writedWord, setWritedWord] = useState("");
  const [words, setWords] = useState<string[]>([]);

  const target = words[wordOrder];

  const fetchWords = async () => {
    const data = await getRandomWordsFromLocal(10);
    setWords(data);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const createWordSpans = (): ReactElement[] | null => {
    if (!isArrayFilled(words)) return null;

    const splittedTarget = target.split("");
    const splittedWritedText = writedWord.split("");
    return splittedTarget.map((key, index) => {
      const writedKey = splittedWritedText[index];
      const isTheSame = writedKey === key;
      return <span key={index} className={isTheSame ? "key success" : "key"}>{key}</span>;
    });
  };

  const onFailure = () => {
    setWritedWord("");
  };
  const onSuccess = () => {
    setWritedWord("");
    setWordOrder(wordOrder + 1);
    setPoppedWordsCount(poppedWordsCount + 1);
  };

  useEffect(() => {
    if (isArrayFilled(words)) {
      validateGameEnding(words.length, poppedWordsCount, () => {
        console.log("gameEnded");
      });
    }
  });

  useEffect(() => {
    if (isArrayFilled(words)) {
      validateOnTyping(writedWord, target, onSuccess, onFailure);
    }
  }, [writedWord]);

  return (
    <>
      <div className="poptyper-poppedcount">
        <h5>
          Popped Words:
          {poppedWordsCount}
        </h5>
      </div>
      <div className="poptyper-word">
        <h3>
          {createWordSpans()}
        </h3>
      </div>
      <div className="poptyper-input container">
        <input type="text" value={writedWord} onChange={(e) => setWritedWord(e.target.value)} />
      </div>
    </>
  );
}

export default TypingArea;
