import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.count}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} count={props.count1} />
            <Part part={props.part2} count={props.count2} />
            <Part part={props.part3} count={props.count3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.count} tehtävää</p>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
        <Header title={course} />
        <Content part1={part1} count1={exercises1} 
                 part2={part2} count2={exercises2}
                 part3={part3} count3={exercises3} />
        <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))