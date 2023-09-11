import { Anecdotes } from "./Components/Anecdotes";
import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { Statistics } from "./Components/Statistics";
import { Total } from "./Components/Total";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;


  return (
    <>
      <section className="items ">
       <Header title={course}/>
        <Content text={part1} number={exercises1} />
        <Content text={part2} number={exercises2} />
        <Content text={part3} number={exercises3} />
        <Total item1={exercises1} item2={exercises2} item3={exercises3} />
        <Statistics/>
        <Anecdotes/>
      </section>
    </>
  );
}

export default App;
