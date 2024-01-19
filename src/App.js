import React, { useState } from "react";
import Startgame from "./Components/Startgame";
import GamePlay from "./Components/GamePlay";

import Copyright from "./Components/Copyright";

function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const toggleGamePlay = () => {
    setisgamestarted((prev) => !prev);
  };
  return (
    <>{isgamestarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />}

    <Copyright/>
    </>
  );
}

export default App;
