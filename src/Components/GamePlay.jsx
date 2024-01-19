import React, { useState } from "react";
import styled from "styled-components";

import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Button, { OutlineButton } from "../styled/Button";
import Rules from "./Rules";
import Copyright from "./Copyright";


const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any Number");

      return;
    }
    // seterror("");

    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectedNumber(undefined);
  };
  const resetScore = () => {
    setscore(0);
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            seterror={seterror}
            selectedNumber={selectedNumber}
            setselectedNumber={setselectedNumber}
          />
        </div>
        <RollDice
          currentDice={currentDice}
          setCurrentDice={setcurrentDice}
          rollDice={rollDice}
        />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setshowrules((prev) => !prev)}>
            {showrules ? "Hide" : "Show"} Rules
          </Button>
        </div>
        {showrules && <Rules />}




      </MainContainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
