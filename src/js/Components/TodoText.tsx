import * as React from 'react';
interface Props {
  todoId: number
  text: string
  isComplete: boolean
  updateTodoTextHandler: Function
}

export const TodoText = (props: Props) => {
  const {todoId, text, isComplete, updateTodoTextHandler} = props;

  const [inputValue, setInputValue] = React.useState('');
  
  const makeActive = () => {
    setInputValue(text);
  }
  
  const updateTodoState = () => {
    inputValue === '' || !inputValue ? setInputValue(text) : null;
    updateTodoTextHandler(todoId, inputValue);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return(<input
    className={`${isComplete ? "line-through text-green-500 placeholder-green-500" : "text-red-500 placeholder-red-500"} flex-grow appearance-none bg-transparent rounded p-2 leading-tight`}
    type="text"
    value={inputValue}
    onChange={handleChange}
    placeholder={text}
    onDoubleClick={makeActive}
    onBlur={updateTodoState}
  ></input>)
}