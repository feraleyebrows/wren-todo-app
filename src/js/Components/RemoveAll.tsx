import * as React from 'react';

interface Props {
  removeAllHandler: Function
}

export const RemoveAll = ({removeAllHandler}: Props) => {
  const removeAll = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    confirm("Are you sure you wish to delete all todos?") ? (removeAllHandler()) : null;
  }

  return (
    <button className="btn btn-red" onClick={removeAll} id="remove_all">
  Remove All
    </button>
  )
}