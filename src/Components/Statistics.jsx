import { useState } from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onCLickGood = () => {
    setGood(good + 1);
  };

  const onCLickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const onClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <section className="statistics">
        <hr />
        <h1>Statistics</h1>
        <div>
          <button onClick={onCLickGood}>Good</button>
          <button onClick={onCLickNeutral}>Neutral</button>
          <button onClick={onClickBad}>Bad</button>
        </div>
        <div>
          {
            (good,
            bad,
            neutral === 0 ? (
              <p>No feedback given</p>
            ) : (
              <div>
                <StatisticLine name="Good" value={good}/>
               <StatisticLine name="Neutral" value={neutral}/>
                <StatisticLine name="Bad" value={bad} />
                <p>All Clicks {good + neutral + bad}</p>
                <p>AVG {(good + neutral + bad) / 3}</p>
                <p>Votes Positives {(good/(good + neutral + bad) * 100).toFixed(2)}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};
