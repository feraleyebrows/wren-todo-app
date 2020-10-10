import { todoEntry } from './declarations';

let initialTodos: Map<number, todoEntry> = new Map([
    [ 0,
      {
      text: "Implement the addTodo method",
      isComplete: false,
      },
    ],
    [
      1,
      {
      text: "Implement the removeTodo method",
      isComplete: false,
      }
    ],
    [
      2,
      {
      text: "Implement the clearCompletedTodos method",
      isComplete: false,
      }
    ],
    [
      3,
      {
      text: "Implement the removeAllTodos method",
      isComplete: false,
    }
    ],
    [
      4,
      {
      text: "Implement the showHideCompletedTodos method",
      isComplete: false,
      }
    ],
    [
      5,
      {
      text: "Implement the toggleTodoCompleteStatus method",
      isComplete: false,
      }
    ]
  ])

let initialHideComplete: boolean = false;

  export default {
    initialTodos,
    initialHideComplete
  }