import * as React from 'react';
import { todoEntry } from '../declarations';


interface initialState {
    initialTodos: Map<number, todoEntry>
    initialHideComplete: boolean
}

export const TodoArea = ({initialTodos, initialHideComplete}: initialState) => {
  const [ todos, setTodos ] = React.useState(initialTodos);
  const [ hideComplete, setHideComplete ] = React.useState(initialHideComplete);
  return (
    <div>
      {[...todos.values()].map(todo => {
      return <p>{todo.text}</p>
      })}
    </div>
  )
}