import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)
  const incrementByOne = () => {console.log('increasting, value before',counter)
    setCounter(counter + 1)
  }
  const decrementByOne = () => {console.log('decreasting, value before',counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before',counter)
    setCounter(0)
  }

  const Display =(props)=>{
  return( 
  <div>{props.counter}</div>
  )
}
 const Button = (props) => {
  return (
  <button onClick={props.onClick}>
    {props.text}
  </button>
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
    <Display counter={counter} />
    <Button onClick= {incrementByOne} text='plus'/>
    <Button onClick={setToZero} text='zero' />
    <Button onClick={decrementByOne} text='minus'/>
  </div>

)

} 
export default App

