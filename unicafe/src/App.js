import { useState } from 'react'

// examples from part 1c https://fullstackopen.com/en/part1/component_state_event_handlers#refactoring-the-components
const Display = ({ counter, text }) => {
  return (
    <div>
      {text} feedback = {counter}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  // use the set function to alter the state instead of directly changing the state
  // ex. Write: setGood(good + 1) 
  //     Don't write: good = good + 1
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h1>Statistics</h1>
      <Display counter={good} text="good"/>
      <Display counter={neutral} text="neutral"/>
      <Display counter={bad} text="bad"/>
    </div>
  )
}

export default App