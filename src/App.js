//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionValue, setLionValue] = useState(0);
  const [tigerValue, setTigerValue] = useState(0);
  function refreshPage(){
    window.location.reload(false);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionValue(lionValue + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionValue(lionValue + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigerValue(tigerValue + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigerValue(tigerValue + 3)}>Away Field Goal</button>
        </div>
        <button onClick={refreshPage}>Refresh</button>
      </section>
    </div>
  );
}

export default App;