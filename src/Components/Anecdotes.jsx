import { useState } from "react";

export const Anecdotes = () => {
  const [nextAnecdote, setNextAnecdote] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(6));

  console.log(vote);
  console.log(nextAnecdote);

  const handleClickNext = () => {
    setNextAnecdote((nextAnecdote) => (nextAnecdote + 1) % anecdotes.length);
  };

  const handleClickVote = () => {
    let newVote = [...vote];
    newVote[nextAnecdote] += 1;
    setVote(newVote);
  };

  const mostVotesIndex = vote.indexOf(Math.max(...vote));

  return (
    <>
      <hr />
      <section className="anecdotes">
        <h1>Anecdotes</h1>
        <q>{anecdotes[nextAnecdote]}</q>
        <div className="container">
          <button onClick={handleClickNext}>Next</button>
          <button onClick={handleClickVote}>Vote</button>
        </div>
        <h2>Anecdote whit most votes :</h2>
        <q>{anecdotes[mostVotesIndex]}</q>
        <h2>Has {vote[mostVotesIndex]} votes</h2>
      </section>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
