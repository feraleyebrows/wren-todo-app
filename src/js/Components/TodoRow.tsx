import * as React from 'react';

interface Props {
  todoId: number
  text: string
  isComplete: boolean
  hideComplete: boolean
  toggleTodoCompleteHandler: Function
  removeTodoHandler: Function
}

export const TodoRow = (props: Props) => {
  let { todoId, text, hideComplete, isComplete, toggleTodoCompleteHandler, removeTodoHandler } = props;

  const toggleTodoComplete = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    toggleTodoCompleteHandler(todoId);
  }

  const removeTodo = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    removeTodoHandler(todoId);
  }

  return (
    <li className={`${hideComplete && isComplete ? "hidden" : "list-item"} flex my-4 space-x-4`}>
      <div className={`${isComplete ? "line-through text-green-500" : "text-red-500"} flex-grow`}>
        {text}
      </div>
      <button className="btn btn-green" onClick={toggleTodoComplete}>Complete</button>
      <button className="btn btn-red" onClick={removeTodo}>Remove</button>
    </li>
  )
}