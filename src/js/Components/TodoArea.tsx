import * as React from 'react';
import { todoEntry } from '../declarations';
import { Taskbar } from './Taskbar';
import { TodoRow } from './TodoRow';

interface initialState {
    initialTodos: Map<number, todoEntry>
    initialHideComplete: boolean
}

export const TodoArea = ({initialTodos, initialHideComplete}: initialState) => {
  let localTodos: Map<number, todoEntry> | null;
  (window.localStorage.getItem('todos') !== null) 
  ? localTodos = new Map(JSON.parse(window.localStorage.getItem('todos')))
  : localTodos = null
  const [ todos, setTodos ] = React.useState(localTodos || initialTodos);
  const [ hideComplete, setHideComplete ] = React.useState(initialHideComplete);

  React.useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify([...todos]));
  }, ['todos', todos]);

  const addTodo = (inputValue: string) => {
    let newMap: Map<number, todoEntry> = new Map(todos);
    // would normally install uuid for next line but read about performance.now and thought this was pretty cool. More info at the bottom of this file.
    let todoId = parseInt(performance.now().toString().split(".").join(""));
    let text = inputValue;
    newMap.set(todoId, {text, isComplete: false})
    setTodos(newMap);
  }
  
  const updateTodoText = (todoId: number, inputValue: string) => {
    let newMap: Map<number, todoEntry> = new Map(todos);
    let todo = newMap.get(todoId);
    newMap.set(todoId, { text: inputValue, isComplete: todo.isComplete});
    setTodos(newMap);
  }

  const removeTodo = (todoId: number) => {
    let newMap: Map<number, todoEntry> = new Map(todos);
    newMap.delete(todoId);
    setTodos(newMap);
  }

  const toggleTodoComplete = (todoId: number) => {
    let newMap: Map<number, todoEntry> = new Map(todos);
    let todo = newMap.get(todoId);
    newMap.set(todoId,{ text: todo.text, isComplete: !todo.isComplete});
    setTodos(newMap); 
  }

  const hideAllCompleted = () => {
    setHideComplete(!hideComplete);
  }

  const removeAllCompleted = () => {
    let newMap: Map<number, todoEntry> = new Map([...todos.entries()].filter(todo => !todo[1].isComplete));
    setTodos(newMap);
  }

  const removeAll = () => {
    const newMap: Map<number, todoEntry> = new Map();
    setTodos(newMap);
  }

  return (
    <div>
      <Taskbar 
      hideComplete={hideComplete} 
      addTodoHandler={addTodo}
      hideAllCompletedHandler={hideAllCompleted}
      removeAllCompletedHandler={removeAllCompleted}
      removeAllHandler={removeAll} 
      />
      <ul className="mt-6">
      {
      [...todos.entries()].map(todo => {
        const todoId = todo[0];
        const {text, isComplete} = todo[1];
        return (
          <TodoRow
          text={text}
          key={todoId} 
          todoId={todoId} 
          isComplete={isComplete}
          hideComplete={hideComplete}
          removeTodoHandler={removeTodo}
          updateTodoTextHandler={updateTodoText}
          toggleTodoCompleteHandler={toggleTodoComplete} 
          />
        )
      })}
      </ul>
    </div>
  )
}

// From MDN: Unlike other timing data available to JavaScript (for example Date.now), the timestamps returned by performance.now() are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.
// This is why I had to use a .split(".") and a .join("") in the method to make it look like a traditional ID number.