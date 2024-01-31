const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={(props.parts)[0].name} exercise={(props.parts)[0].exercises} />
      <Part part={(props.parts)[1].name} exercise={(props.parts)[1].exercises} />
      <Part part={(props.parts)[2].name} exercise={(props.parts)[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let totalexercises = 0
  for (let i = 0; i < (props.parts).length; i++) {
    totalexercises += props.parts[i].exercises
  }
  return (
    <div>
      {totalexercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
