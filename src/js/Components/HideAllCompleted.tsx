import * as React from 'react';

interface Props {
  hideComplete: boolean
  hideAllCompletedHandler: Function
}

export const HideAllCompleted = ({hideComplete, hideAllCompletedHandler}: Props) => {
  const hideAllComplete = ( e: React.MouseEvent) => {
    e.preventDefault();
    hideAllCompletedHandler();
  }

  return (
    <button className="btn btn-green" onClick={hideAllComplete}>
      {hideComplete ? "Show Completed " : "Hide Completed"}
    </button>
  );
}