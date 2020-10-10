import * as React from 'react';
import {AddTodo} from './AddTodo';
import {HideAllCompleted} from './HideAllCompleted';
import {RemoveAllCompleted} from './RemoveAllCompleted';
import {RemoveAll} from './RemoveAll';

interface Props {
  hideComplete: boolean
  addTodoHandler: Function
  hideAllCompletedHandler: Function
  removeAllCompletedHandler: Function
  removeAllHandler: Function
}

export const Taskbar = (props: Props) => {
  let {
    hideComplete,
    addTodoHandler,  
    hideAllCompletedHandler,
    removeAllCompletedHandler, 
    removeAllHandler 
  } = props;

  return (
  <div className="flex flex-col md:flex-row space-x-4 items-center">
      <div className="flex-grow mb-6 md:mb-0">
        <AddTodo addTodoHandler={addTodoHandler}/>
      </div>
      <div className="flex space-x-4">
      <HideAllCompleted hideComplete={hideComplete} hideAllCompletedHandler={hideAllCompletedHandler} />
      <RemoveAllCompleted removeAllCompletedHandler={removeAllCompletedHandler} />
      <RemoveAll removeAllHandler={removeAllHandler} />
      </div>
  </div>)
}