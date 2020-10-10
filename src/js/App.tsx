import * as React from 'react';
import initialState from './initialState';
import { TodoArea } from './Components/TodoArea';

const App: React.FC = () => {
  return <TodoArea 
  initialTodos={initialState.initialTodos} 
  initialHideComplete={initialState.initialHideComplete} 
  />
}

export default App;