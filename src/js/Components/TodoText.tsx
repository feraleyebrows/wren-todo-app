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
  const [isEditing, setIsEditing ] = React.useState(false);

  const makeActive = () => {
    setIsEditing(true);
    setInputValue(text);
  }
  
  const updateTodoState = () => {
    inputValue === '' || !inputValue ? setInputValue(text) : null;
    updateTodoTextHandler(todoId, inputValue);
    setIsEditing(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  return(<textarea
    className={`
    ${isComplete
      ? "line-through text-green-500 placeholder-green-500" 
      : "text-red-500 placeholder-red-500"
    }
    ${isEditing
      ? "resize-y"
      : "resize-none"
    }
    flex-grow appearance-none bg-transparent rounded p-2 leading-tight`}
    value={inputValue}
    wrap="soft"
    onChange={handleChange}
    placeholder={text}
    onClick={makeActive}
    onBlur={updateTodoState}
  ></textarea>)
}