import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const [counter, setCounter] = useState(0)
  const incrementByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const Display =(props)=>{
  return( 
  <div>{props.value}</div>
  )
}

  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />


    <h2>Counter</h2>
    <div>{counter}</div>
    <button onClick= {incrementByOne}> 
      plus
      </button>
      <button onClick={setToZero}>
      zero
      </button>

  </div>

)



}

export default App


