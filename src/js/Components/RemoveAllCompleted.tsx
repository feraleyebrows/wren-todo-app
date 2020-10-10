import * as React from 'react';

interface Props {
  removeAllCompletedHandler: Function
}

export const RemoveAllCompleted = ({removeAllCompletedHandler}: Props) => {
  const removeAllCompleted = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    removeAllCompletedHandler();
  }

  return (
    <button onClick={removeAllCompleted} className="btn btn-orange" id="remove_completed">
      Remove Completed
    </button>
  );
}