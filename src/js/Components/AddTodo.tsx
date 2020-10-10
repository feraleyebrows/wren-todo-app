import * as React from 'react';

interface Props {
  addTodoHandler: Function
}

export const AddTodo = ({addTodoHandler}: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  const addTodo = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    addTodoHandler(inputValue);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="flex  space-x-4 items-center">
        <input
          id="new_todo_input"
          className="flex-grow flex-1 appearance-none bg-gray-200 text-gray-700 border rounded p-2 leading-tight focus:outline-none focus:bg-white"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Build bunkbeds"
        ></input>
        <button onClick={addTodo} id="flex-none new_todo_submit" className="btn btn-blue">
          Add Todo
        </button>
      </div>
  )
}