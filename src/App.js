const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, it is {props.day}</p>
    </div>
  )
}

const App = () => {
  const day = 'Sunday';

  return (
    <div>
      <Hello name="Blake" day={day} />
    </div>
  )
}

export default App