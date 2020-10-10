import * as React from 'react';
import { TodoText } from './TodoText';
interface Props {
  todoId: number
  text: string
  isComplete: boolean
  hideComplete: boolean
  updateTodoTextHandler: Function
  toggleTodoCompleteHandler: Function
  removeTodoHandler: Function
}

export const TodoRow = (props: Props) => {
  let { todoId, text, hideComplete, isComplete, toggleTodoCompleteHandler, removeTodoHandler, updateTodoTextHandler } = props;

  const toggleTodoComplete = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    toggleTodoCompleteHandler(todoId);
  }

  const removeTodo = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    removeTodoHandler(todoId);
  }

  return (
    <li className={`${hideComplete && isComplete ? "hidden" : "list-item"} flex my-4 space-x-4 align-items`}>
      <TodoText todoId={todoId} text={text} isComplete={isComplete} updateTodoTextHandler={updateTodoTextHandler}/>
      <button className="btn btn-green" onClick={toggleTodoComplete}>Complete</button>
      <button className="btn btn-red" onClick={removeTodo}>Remove</button>
    </li>
  )
}